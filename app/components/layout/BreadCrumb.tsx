import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '../ui/breadcrumb';

interface BreadcrumbItemType {
  label: string;
  path: string;
}

export type BreadCrumbProps = {
  breadcrumbs: BreadcrumbItemType[];
};

export function BreadCrumb({ breadcrumbs }: BreadCrumbProps) {
  return (
    <Breadcrumb className="border-b border-slate-200 h-[56px] flex items-center px-4">
      <BreadcrumbList>
        {breadcrumbs.map((breadcrumb, index) => (
          <>
            {index > 0 && <BreadcrumbSeparator />}
            <BreadcrumbItem key={breadcrumb.path}>
              <BreadcrumbLink href={breadcrumb.path}>{breadcrumb.label}</BreadcrumbLink>
            </BreadcrumbItem>
          </>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export default BreadCrumb;
