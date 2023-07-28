import { PageLoad } from "@/components/ui/PageLoad/PageLoad";
import { usePaginatedList } from "@/hooks/usePaginatedList";
import { AccessRequest } from "@/models/AccessRequest";

function AccessRequestPage() {
  const { list: accessRequests, isLoading } =
    usePaginatedList<AccessRequest>("access-request");

  if (isLoading) return <PageLoad />;

  return <pre>{JSON.stringify(accessRequests, null, 2)}</pre>;
}

export { AccessRequestPage };
