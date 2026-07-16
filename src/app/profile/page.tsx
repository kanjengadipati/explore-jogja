'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Loader2, AlertCircle } from 'lucide-react';
import { auth, reviews as reviewsApi, type ProfileResponse } from '../../lib/api';
import ProfileHeader from '../../components/profile/ProfileHeader';
import TravelStatisticsCard from '../../components/profile/TravelStatisticsCard';

interface ProfileStats {
  name: string;
  title: string;
  avatar: string;
  coverImage: string;
  level: number;
  destinationsCount: number;
  reviewsCount: number;
  likesCount: number;
  tripsCount: number;
}

export default function ProfilePage() {
  const router = useRouter();
  const [profileData, setProfileData] = useState<ProfileResponse | null>(null);
  const [stats, setStats] = useState<ProfileStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Edit form state
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [profileSaving, setProfileSaving] = useState(false);
  const [profileSuccess, setProfileSuccess] = useState('');
  const [profileError, setProfileError] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordSaving, setPasswordSaving] = useState(false);
  const [passwordSuccess, setPasswordSuccess] = useState('');
  const [passwordError, setPasswordError] = useState('');

  useEffect(() => {
    if (!auth.isLoggedIn()) {
      router.push('/');
      return;
    }
    loadProfile();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadProfile = async () => {
    try {
      const res = await auth.getProfile();
      if (res.status !== 'success' || !res.data) {
        setError('Failed to load profile');
        setLoading(false);
        return;
      }

      const profile = res.data;
      setProfileData(profile);
      setName(profile.name || '');
      setPhone(profile.phone || '');

      // Fetch real review count for this user
      let reviewsCount = 0;
      try {
        const userId = String((profile as any).id || '');
        if (userId) {
          const revRes = await reviewsApi.getByUser(userId);
          if (revRes.status === 'success' && Array.isArray(revRes.data)) {
            reviewsCount = revRes.data.length;
          }
        }
      } catch { /* silently fall back to 0 */ }

      // Saved destinations count from localStorage (no BE endpoint for this yet)
      let destinationsCount = 0;
      try {
        const saved = localStorage.getItem('explore_jogja_saved_v1');
        if (saved) {
          const parsed = JSON.parse(saved);
          destinationsCount = Array.isArray(parsed) ? parsed.length : 0;
        }
      } catch { /* ignore */ }

      setStats({
        name: profile.name || 'Explorer',
        title: profile.role === 'superadmin' || profile.role === 'admin' ? 'Platform Administrator' : 'Traveler',
        avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(profile.name || 'A')}&backgroundColor=1c1a17`,
        coverImage: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1200&h=400',
        level: Math.min(10, Math.max(1, Math.floor(reviewsCount / 3) + 1)),
        destinationsCount,
        reviewsCount,
        // likes and trips have no BE endpoint yet — show 0 honestly
        likesCount: 0,
        tripsCount: 0,
      });
    } catch {
      setError('Network error');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setProfileSaving(true);
    setProfileSuccess('');
    setProfileError('');
    try {
      const res = await auth.updateProfile(name, phone || undefined);
      if (res.status === 'success') {
        setProfileSuccess('Profile updated successfully');
        await loadProfile();
      } else {
        setProfileError(res.message || 'Failed to update profile');
      }
    } catch {
      setProfileError('Network error');
    } finally {
      setProfileSaving(false);
    }
  };

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordSaving(true);
    setPasswordSuccess('');
    setPasswordError('');
    if (newPassword !== confirmPassword) { setPasswordError('Passwords do not match'); setPasswordSaving(false); return; }
    if (newPassword.length < 8) { setPasswordError('Password must be at least 8 characters'); setPasswordSaving(false); return; }
    try {
      const res = await auth.changePassword(currentPassword, newPassword);
      if (res.status === 'success') {
        setPasswordSuccess('Password changed successfully');
        setCurrentPassword(''); setNewPassword(''); setConfirmPassword('');
      } else {
        setPasswordError(res.message || 'Failed to change password');
      }
    } catch {
      setPasswordError('Network error');
    } finally {
      setPasswordSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#faf9f6] flex items-center justify-center">
        <Loader2 className="h-8 w-8 text-gold-500 animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#faf9f6] flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="h-12 w-12 text-red-400 mx-auto mb-3" />
          <p className="text-royal-950 font-medium">{error}</p>
          <button onClick={() => router.push('/')} className="mt-4 text-sm text-gold-600 hover:text-gold-700 underline">Back to Home</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#faf9f6]">
      <div className="bg-royal-950 text-white">
        <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6">
          <button onClick={() => router.push('/')} className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors mb-4">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm font-medium">Back to Explore</span>
          </button>
          <h1 className="font-manrope text-2xl sm:text-3xl font-bold tracking-tight">My Profile</h1>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 space-y-6">
        {stats && (
          <>
            <ProfileHeader profile={stats} onEditProfile={() => {}} />
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-6">

                {/* Edit Profile Form */}
                <div className="bg-white border border-stone-200/60 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-bold text-base text-royal-950 mb-4">Edit Profile</h3>
                  <form onSubmit={handleUpdateProfile} className="space-y-4">
                    <div>
                      <label className="text-xs font-semibold text-stone-500 block mb-1.5">Full Name</label>
                      <input value={name} onChange={e => setName(e.target.value)} className="w-full bg-stone-50 focus:bg-white border border-stone-200 text-sm px-4 py-2.5 rounded-xl outline-none focus:border-gold-400 transition" />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-stone-500 block mb-1.5">Email</label>
                      <input value={profileData?.email || ''} disabled className="w-full bg-stone-100 border border-stone-200 text-sm px-4 py-2.5 rounded-xl outline-none text-stone-400 cursor-not-allowed" />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-stone-500 block mb-1.5">Phone</label>
                      <input value={phone} onChange={e => setPhone(e.target.value)} placeholder="+62 8xx-xxxx-xxxx" className="w-full bg-stone-50 focus:bg-white border border-stone-200 text-sm px-4 py-2.5 rounded-xl outline-none focus:border-gold-400 transition" />
                    </div>
                    {profileError && <p className="text-xs text-red-600 font-semibold">{profileError}</p>}
                    {profileSuccess && <p className="text-xs text-green-600 font-semibold">{profileSuccess}</p>}
                    <button type="submit" disabled={profileSaving} className="w-full py-2.5 bg-royal-950 hover:bg-royal-900 disabled:opacity-60 text-white text-sm font-semibold rounded-xl transition">
                      {profileSaving ? 'Saving…' : 'Save Changes'}
                    </button>
                  </form>
                </div>

                {/* Change Password Form */}
                <div className="bg-white border border-stone-200/60 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-bold text-base text-royal-950 mb-4">Change Password</h3>
                  <form onSubmit={handleChangePassword} className="space-y-4">
                    {[
                      { label: 'Current Password', value: currentPassword, setter: setCurrentPassword },
                      { label: 'New Password', value: newPassword, setter: setNewPassword },
                      { label: 'Confirm New Password', value: confirmPassword, setter: setConfirmPassword },
                    ].map(({ label, value, setter }) => (
                      <div key={label}>
                        <label className="text-xs font-semibold text-stone-500 block mb-1.5">{label}</label>
                        <input type="password" value={value} onChange={e => setter(e.target.value)} className="w-full bg-stone-50 focus:bg-white border border-stone-200 text-sm px-4 py-2.5 rounded-xl outline-none focus:border-gold-400 transition" />
                      </div>
                    ))}
                    {passwordError && <p className="text-xs text-red-600 font-semibold">{passwordError}</p>}
                    {passwordSuccess && <p className="text-xs text-green-600 font-semibold">{passwordSuccess}</p>}
                    <button type="submit" disabled={passwordSaving} className="w-full py-2.5 bg-royal-950 hover:bg-royal-900 disabled:opacity-60 text-white text-sm font-semibold rounded-xl transition">
                      {passwordSaving ? 'Saving…' : 'Change Password'}
                    </button>
                  </form>
                </div>

              </div>
              <div>
                <TravelStatisticsCard profile={stats} />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
