"use client";

import React, { useEffect, useState } from 'react';
import { fetchJobs } from '../../../../../services/JobServices';
import { Job } from '../../../../../services/JobServices'; // Dùng chung interface Job nếu export ra

const CareerPage = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadJobData = async () => {
      try {
        const fetchedJobs = await fetchJobs();
        setJobs(fetchedJobs); // ✅ sửa đúng chỗ này
      } catch (err) {
        setError('Failed to load job data');
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };

    loadJobData();
  }, []);

  if (loading) return <div className="text-center py-10 text-gray-500">Đang tải dữ liệu...</div>;
  if (error) return <div className="text-center py-10 text-red-500">{error}</div>;

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-10 text-center text-[#111]">CƠ HỘI NGHỀ NGHIỆP</h1>
      <div className="space-y-12">
        {jobs.map((job) => (
          <div key={job.contentItemId} className="p-6 border border-gray-200 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-2">{job.displayText}</h2>
            <p className="text-gray-500 mb-4">Phòng ban: {job.department} | Vị trí: {job.jobLevel} | Hình thức: {job.employmentType}</p>
            <p className="text-gray-500 mb-4">Địa điểm: {job.location} | Hạn nộp: {job.expirationDate}</p>
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Mô tả công việc</h3>
              <div className="prose" dangerouslySetInnerHTML={{ __html: job.description?.html || '' }} />
            </div>
            {job.requirements?.html && (
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">Yêu cầu</h3>
                <div className="prose" dangerouslySetInnerHTML={{ __html: job.requirements.html }} />
              </div>
            )}
            {job.benefits?.html && (
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">Quyền lợi</h3>
                <div className="prose" dangerouslySetInnerHTML={{ __html: job.benefits.html }} />
              </div>
            )}
            <div className="text-sm text-gray-600">
              <div>📧 Liên hệ: {job.contactEmail}</div>
              <div>👤 Người đăng: {job.owner}</div>
              <div>💰 Mức lương: {job.salary || 'Thỏa thuận'}</div>
              <div>📅 Trạng thái: {job.published ? 'Đã đăng' : 'Chưa đăng'}</div>
            </div>
            <button className="mt-6 px-6 py-3 bg-[#111] text-white rounded-full font-medium hover:bg-[#333] transition">
              Ứng tuyển ngay
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerPage;
