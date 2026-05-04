// src/navigation/RoleBasedNavigator.js
// FULL UPDATED FILE
// Clean + Exact Folder Match + Safe Role Routing
// Fixed User Flow Uses UserNavigator

import React from 'react';

import OwnerStackNavigator from './OwnerStackNavigator';
import AdminStackNavigator from './AdminStackNavigator';
import UserNavigator from './UserNavigator';

export default function RoleBasedNavigator({
  role,
}) {
  const safeRole =
    String(
      role || 'USER'
    )
      .trim()
      .toUpperCase();

  /* ================= ADMIN ================= */

  if (
    safeRole ===
      'ADMIN' ||
    safeRole ===
      'ROLE_ADMIN'
  ) {
    return (
      <AdminStackNavigator />
    );
  }

  /* ================= OWNER ================= */

  if (
    safeRole ===
      'OWNER' ||
    safeRole ===
      'PROPERTY_OWNER' ||
    safeRole ===
      'PROPERTYOWNER' ||
    safeRole ===
      'ROLE_OWNER' ||
    safeRole ===
      'ROLE_PROPERTY_OWNER'
  ) {
    return (
      <OwnerStackNavigator />
    );
  }

  /* ================= USER ================= */

  return (
    <UserNavigator />
  );
}