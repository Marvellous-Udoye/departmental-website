"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/dashboard/common/card";
import DashboardPageLoader from "@/components/loaders/dashboardPages";
import { BASE_URL } from "@/utils/constants";
import {
  AcademicCapIcon,
  BookOpenIcon,
  UserGroupIcon,
} from "@heroicons/react/20/solid";
import { ExclamationCircleIcon, PencilIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useEffect, useState } from "react";
import defaultProfilePicture from "../../../../public/images/teams.jpg";

interface ProfileData {
  username: string;
  email: string;
  matricno: string;
  department: string;
  level: string;
  phone: string;
  about: string;
  imageUrl: string;
  user_id: string;
}

const initialProfileData: ProfileData = {
  username: "",
  email: "",
  matricno: "",
  department: "",
  level: "",
  phone: "",
  about: "",
  imageUrl: "/api/placeholder/150/150",
  user_id: "",
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
      <div className="flex max-md:flex-col justify-between md:items-center mb-6">
        <div className="flex items-center gap-x-4">
          <Image
            className="object-cover w-24 h-24 rounded-lg"
            src={data.imageUrl}
            alt={data.username}
            width={96}
            height={96}
          />
          <div>
            <h1 className="text-xl font-semibold text-gray-800">
              {data.username}
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
          <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-gray-900">Department</dt>
            <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">
              {data.department}
            </dd>
          </div>
          <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-gray-900">Level</dt>
            <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">
              {data.level}
            </dd>
          </div>
          <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-gray-900">Matric Number</dt>
            <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">
              {data.matricno}
            </dd>
          </div>
          <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-gray-900">Phone Number</dt>
            <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">
              {data.phone}
            </dd>
          </div>
          <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-gray-900">About</dt>
            <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">
              {data.about || "No description provided"}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

function EditProfile({
  data,
  onSave,
  onCancel,
}: {
  data: ProfileData;
  onSave: (data: Partial<ProfileData>) => void;
  onCancel: () => void;
}) {
  const [editableData, setEditableData] = useState({
    about: data.about || "",
    imageUrl: data.imageUrl,
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await onSave(editableData);
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const imageUrl = URL.createObjectURL(e.target.files[0]);
      setEditableData((prev) => ({ ...prev, imageUrl }));
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm md:p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Image
            className="object-cover w-24 h-24 rounded-lg mb-4"
            src={editableData.imageUrl ?? defaultProfilePicture}
            alt="Profile"
            width={96}
            height={96}
          />
          <label className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 cursor-pointer inline-block">
            Change Photo
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleFileChange}
            />
          </label>
        </div>

        {/* Read-only fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              value={data.username}
              disabled
              className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={data.email}
              disabled
              className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Matric Number
            </label>
            <input
              type="text"
              value={data.matricno}
              disabled
              className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Department
            </label>
            <input
              type="text"
              value={data.department}
              disabled
              className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Level
            </label>
            <input
              type="text"
              value={data.level}
              disabled
              className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="text"
              value={data.phone}
              disabled
              className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        {/* Editable field */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            About
          </label>
          <textarea
            value={editableData.about}
            onChange={(e) =>
              setEditableData((prev) => ({ ...prev, about: e.target.value }))
            }
            rows={4}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={onCancel}
            disabled={loading}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 disabled:opacity-50"
          >
            {loading ? "Saving..." : "Save Changes"}
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
              <dd className="text-2xl font-bold text-blue-600">4.7</dd>
            </div>
            <div>
              <dt className="text-sm text-gray-500">Last Semester GPA</dt>
              <dd className="font-semibold">--</dd>
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
          <dl className="space-y-2">
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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem("access");
        const user_id = localStorage.getItem("user_id");

        const response = await fetch(`${BASE_URL}/api/users/${user_id}/`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch profile data");
        }

        const data = await response.json();
        setProfileData({
          ...initialProfileData,
          ...data,
          imageUrl: data.imageUrl || initialProfileData.imageUrl,
          user_id: user_id || "",
        });
      } catch {
        setError("Failed to load profile data");
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  const handleSave = async (newData: Partial<ProfileData>) => {
    try {
      const token = localStorage.getItem("access");
      const user_id = localStorage.getItem("user_id");

      const response = await fetch(`${BASE_URL}/api/users/${user_id}/`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          about: newData.about,
          imageUrl: newData.imageUrl,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update profile");
      }

      const data = await response.json();
      setProfileData((prev) => ({ ...prev, ...data }));
      setIsEditing(false);
    } catch {
      setError("Failed to update profile");
    }
  };

  if (loading) return <DashboardPageLoader />;
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-[70dvh] my-10 mx-4 sm:mx-8 xl:mx-auto px-4 sm:px-8 lg:px-10 text-center text-red-500">
        <h1 className="text-3xl font-bold">
          <ExclamationCircleIcon className="text-red-500" />
          Oops!
        </h1>
        <p className="text-lg mt-2">
          Something went wrong. <br className="sm:hidden" /> Error: {error}
        </p>
        <button
          className="mt-4 py-2 px-6 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all"
          onClick={() => window.location.reload()}
        >
          Reload Page
        </button>
      </div>
    );
  }

  return (
    <div className="pt-10 pb-4">
      {isEditing ? (
        <EditProfile
          data={profileData}
          onSave={handleSave}
          onCancel={() => setIsEditing(false)}
        />
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
