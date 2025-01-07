"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/dashboard/common/card";
import {
  AcademicCapIcon,
  BookOpenIcon,
  UserGroupIcon,
} from "@heroicons/react/20/solid";
import { PencilIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React, { useState } from "react";

interface ProfileData {
  fullName: string;
  email: string;
  department: string;
  level: string;
  matricNumber: string;
  phone: string;
  about: string;
  imageUrl: string;
  attachments: Array<{
    name: string;
    size: string;
    url: string;
  }>;
}

const initialProfileData: ProfileData = {
  fullName: "",
  email: "",
  department: "",
  level: "",
  matricNumber: "",
  phone: "",
  about: "",
  imageUrl: "/api/placeholder/150/150",
  attachments: [],
};

function ProfileDetails({
  data,
  onEdit,
}: {
  data: ProfileData;
  onEdit: () => void;
}) {
  return (
    <div>
      <div className="flex justify-between items-center md:items-start mb-6">
        <div className="flex items-center gap-x-4">
          <Image
            className="object-cover w-24 h-24 rounded-lg"
            src={data.imageUrl}
            alt={data.fullName}
            width={96}
            height={96}
          />
          <div>
            <h1 className="text-xl font-semibold text-gray-800">
              {data.fullName}
            </h1>
            <p className="text-gray-600">{data.email}</p>
          </div>
        </div>
        <button
          onClick={onEdit}
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100"
        >
          <PencilIcon className="w-4 h-4" />
          Edit Profile
        </button>
      </div>

      <div className="border-t-2 border-gray-200">
        <dl className="divide-y-2 divide-gray-200">
          <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 ">
            <dt className="text-sm font-medium text-gray-900">Department</dt>
            <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">
              {data.department}
            </dd>
          </div>
          <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 ">
            <dt className="text-sm font-medium text-gray-900">Level</dt>
            <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">
              {data.level}
            </dd>
          </div>
          <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 ">
            <dt className="text-sm font-medium text-gray-900">Matric Number</dt>
            <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">
              {data.matricNumber}
            </dd>
          </div>
          <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 ">
            <dt className="text-sm font-medium text-gray-900">Phone Number</dt>
            <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">
              {data.phone}
            </dd>
          </div>
          <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 ">
            <dt className="text-sm font-medium text-gray-900">About</dt>
            <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">
              {data.about}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

function EditProfile({
  onSave,
  onCancel,
}: {
  onSave: (data: ProfileData) => void;
  onCancel: () => void;
}) {
  const [formData, setFormData] = useState<ProfileData>(initialProfileData);
  const [, setFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      // We would upload this file to the server and get a URL back
      // For now, we'll create a local URL
      const imageUrl = URL.createObjectURL(e.target.files[0]);
      setFormData({
        ...formData,
        imageUrl,
      });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="mb-6">
        <Image
          className="object-cover border w-24 h-24 rounded-lg"
          src={formData.imageUrl}
          alt="Profile"
          width={96}
          height={96}
        />
        <label className="mt-4 px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 cursor-pointer inline-block">
          Change Photo
          <input
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleFileChange}
          />
        </label>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Matric Number
            </label>
            <input
              type="text"
              name="matricNumber"
              required
              value={formData.matricNumber}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Department
            </label>
            <select
              name="department"
              required
              value={formData.department}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Department</option>
              <option value="Computer Engineering">
                Biomedical Engineering
              </option>
              <option value="Computer Engineering">Civil Engineering</option>
              <option value="Computer Engineering">Computer Engineering</option>
              <option value="Electrical Engineering">
                Electrical Engineering
              </option>
              <option value="Mechanical Engineering">
                Mechanical Engineering
              </option>
              <option value="Computer Engineering">
                Mechatronics Engineering
              </option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Level
            </label>
            <select
              name="level"
              required
              value={formData.level}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Level</option>
              <option value="100 Level">100 Level</option>
              <option value="200 Level">200 Level</option>
              <option value="300 Level">300 Level</option>
              <option value="400 Level">400 Level</option>
              <option value="500 Level">500 Level</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            About
          </label>
          <textarea
            name="about"
            value={formData.about}
            onChange={handleChange}
            rows={4}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}

function AcademicInfo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <AcademicCapIcon className="w-5 h-5 text-blue-500" />
            Academic Performance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <dl className="space-y-2">
            <div>
              <dt className="text-sm text-gray-500">Current CGPA</dt>
              <dd className="text-2xl font-bold text-blue-600">4.2</dd>
            </div>
            <div>
              <dt className="text-sm text-gray-500">Last Semester GPA</dt>
              <dd className="font-semibold">4.5</dd>
            </div>
            <div>
              <dt className="text-sm text-gray-500">Standing</dt>
              <dd className="text-green-600 font-medium">First Class</dd>
            </div>
          </dl>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <BookOpenIcon className="w-5 h-5 text-green-500" />
            Current Semester
          </CardTitle>
        </CardHeader>
        <CardContent>
          <dl className="space-y-2 pb-2">
            <div>
              <dt className="text-sm text-gray-500">Registered Courses</dt>
              <dd className="font-semibold">11</dd>
            </div>
            <div>
              <dt className="text-sm text-gray-500">Total Units</dt>
              <dd className="font-semibold">21</dd>
            </div>
            <div>
              <dt className="text-sm text-gray-500">Semester Progress</dt>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                <div className="bg-green-500 h-2.5 rounded-full w-[75%]"></div>
              </div>
            </div>
          </dl>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <UserGroupIcon className="w-5 h-5 text-purple-500" />
            Activities & Achievements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              IEEE Student Member
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              Departmental Project Lead
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              Dean&apos;s List 2023
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] =
    useState<ProfileData>(initialProfileData);

  const handleSave = (newData: ProfileData) => {
    setProfileData(newData);
    setIsEditing(false);
  };

  return (
    <div className="py-6 sm:py-10">
      {isEditing ? (
        <EditProfile onSave={handleSave} onCancel={() => setIsEditing(false)} />
      ) : (
        <>
          <ProfileDetails
            data={profileData}
            onEdit={() => setIsEditing(true)}
          />
          <AcademicInfo />
        </>
      )}
    </div>
  );
}
