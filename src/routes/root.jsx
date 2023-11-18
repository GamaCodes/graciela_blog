import { Outlet, Link } from "react-router-dom";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink
  } from '@chakra-ui/react'

export default function Root() {
  return (
    <div id="root-page">
        <Breadcrumb separator='-'>
            <BreadcrumbItem>
                <Link to={`/`}>Home</Link>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <Link to={`posts`}>Posts</Link>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href='#'>Contact</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>

        <div id="home">
            <Outlet />
        </div>
    </div>
  );
}