'use client'; // Mark as Client Component
import { usePathname } from 'next/navigation';
import AuthLayout from 'app/Components/layouts/AuthLayout'
import React from 'react'

const layout = ({ children }) => {
    const pathname = usePathname();

console.log("currentPath", pathname)
    return (
        <AuthLayout LeftView={pathname === "/auth/register"} strip={pathname === "/auth/stripe-integration"}>
            {children}
        </AuthLayout>
    )
}

export default layout
