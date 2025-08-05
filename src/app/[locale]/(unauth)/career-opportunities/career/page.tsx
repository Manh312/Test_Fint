'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaBriefcase, FaClock, FaEnvelope, FaMapMarkerAlt, FaMoneyBillWave } from 'react-icons/fa';
import { IoMdCheckmarkCircle } from 'react-icons/io';

import { Button } from '@/components/ui/button';

import { fetchJobs } from '../../../../../services/JobServices';
import type { Job } from '../../../../../types/job';

// Hàm định dạng ngày
const formatDate = (dateString: any) => {
  if (!dateString) {
    return 'Không xác định';
  }
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) {
    return 'Không xác định';
  }
  return date.toLocaleDateString('vi-VN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
};

const formatCurrency = (value: any) => {
  if (!value || Number.isNaN(Number(value))) {
    return 'Thỏa thuận';
  }
  return Number(value).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
};

const CareerPage = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadJobData = async () => {
      try {
        const fetchedJobs = await fetchJobs();
        const updatedJobs = fetchedJobs.map(job => ({
          ...job,
          expirationDate: formatDate(job.expirationDate),
        }));
        setJobs(updatedJobs);
      } catch (err) {
        setError('Không thể tải dữ liệu công việc.');
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };

    loadJobData();
  }, []);

  if (loading) {
    return <div className="text-center py-10 text-gray-500">Đang tải dữ liệu...</div>;
  }
  if (error) {
    return <div className="text-center py-10 text-red-500">{error}</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 bg-gray-50 min-h-screen">
      <Link href="/career-opportunities/policies-and-culture">
        <Button variant="default" size="sm" className="mb-6">
          Quay lại chính sách và văn hóa
        </Button>
      </Link>
      <h1 className="text-5xl font-bold text-center mb-12 text-gray-900 drop-shadow-md">
        Danh sách công việc hiện có
      </h1>

      <div className="space-y-8">
        {jobs.map(job => (
          <div
            key={job.contentItemId}
            className="border border-gray-200 shadow-lg rounded-xl p-6 bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="mb-6 border-b border-gray-200 pb-4">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">{job.displayText}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                <span className="flex items-center">
                  <FaBriefcase className="mr-2 text-blue-500" />
                  {' '}
                  Phòng ban:
                  {job.department}
                </span>
                <span className="flex items-center">
                  <FaMapMarkerAlt className="mr-2 text-green-500" />
                  {' '}
                  Địa điểm:
                  {job.location}
                </span>
                <span className="flex items-center">
                  <FaClock className="mr-2 text-yellow-500" />
                  {' '}
                  Hạn nộp:
                  {job.expirationDate}
                </span>
                <span className="flex items-center">
                  <FaBriefcase className="mr-2 text-purple-500" />
                  {' '}
                  Hình thức:
                  {job.employmentType}
                </span>
                <span className="flex items-center">
                  <FaBriefcase className="mr-2 text-indigo-500" />
                  {' '}
                  Cấp bậc:
                  {job.jobLevel}
                </span>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center">
                <IoMdCheckmarkCircle className="mr-2 text-green-500" />
                {' '}
                1. Mô tả công việc
              </h3>
              <div
                className="prose prose-sm text-gray-700 custom-list"
                dangerouslySetInnerHTML={{ __html: job.description?.html || '<p>Không có mô tả.</p>' }}
              />
            </div>

            {job.requirements?.html && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center">
                  <IoMdCheckmarkCircle className="mr-2 text-green-500" />
                  {' '}
                  2. Yêu cầu công việc
                </h3>
                <div
                  className="prose prose-sm text-gray-700 custom-list"
                  dangerouslySetInnerHTML={{ __html: job.requirements.html || '<p>Không có yêu cầu.</p>' }}
                />
              </div>
            )}

            {job.benefits?.html && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center">
                  <IoMdCheckmarkCircle className="mr-2 text-green-500" />
                  {' '}
                  3. Quyền lợi
                </h3>
                <div
                  className="prose prose-sm text-gray-700 custom-list"
                  dangerouslySetInnerHTML={{ __html: job.benefits.html || '<p>Không có thông tin quyền lợi.</p>' }}
                />
              </div>
            )}

            <div className="text-sm text-gray-600 space-y-2">
              <p className="flex items-center">
                <FaEnvelope className="mr-2 text-red-500" />
                <span>
                  Email liên hệ:
                  {' '}
                  <strong>{job.contactEmail || 'Chưa cập nhật'}</strong>
                </span>
              </p>
              <p className="flex items-center">
                <FaMoneyBillWave className="mr-2 text-green-600" />
                <span>
                  Mức lương:
                  {' '}
                  <strong>{formatCurrency(job.salary)}</strong>
                </span>
              </p>
            </div>

            <div className="mt-6">
              <button
                type="button"
                className="bg-blue-600 hover:bg-blue-700 transition-colors text-white px-6 py-3 rounded-lg text-sm font-medium flex items-center justify-center w-full md:w-auto"
                disabled={!job.contactEmail}
              >
                <span>Ứng tuyển ngay</span>
                <FaBriefcase className="ml-2" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerPage;

// Thêm dòng trống ở cuối file
