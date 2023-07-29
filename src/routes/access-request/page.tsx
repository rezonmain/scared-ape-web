import { PageLoad } from "@/components/ui/PageLoad/PageLoad";
import { PaginatedTable } from "@/components/ui/PaginatedTable/PaginatedTable";
import { Toggle } from "@/components/ui/Toggle/Toggle";
import { usePaginatedList } from "@/hooks/usePaginatedList";
import { AccessRequest } from "@/models/AccessRequest";
import { ReactNode } from "react";

const headerColumns: Array<{
  content: ReactNode;
}> = [
  { content: "Email" },
  { content: "Requested At" },
  { content: "Updated At" },
  { content: "Whitelisted" },
];

function AccessRequestPage() {
  const {
    list: accessRequests,
    isLoading,
    pagination,
  } = usePaginatedList<AccessRequest>("access-request");

  if (isLoading) return <PageLoad />;

  if (accessRequests && pagination)
    return (
      <PaginatedTable
        data={accessRequests}
        pagination={pagination}
        selectable
        onRowSelect={(row) => console.log(row)}
        onSelectAll={(data) => console.log(data)}
      >
        <PaginatedTable.Header columns={headerColumns} />
        <PaginatedTable.Body>
          {accessRequests.map((accessRequest) => (
            <PaginatedTable.Row
              key={accessRequest.id?.toString()}
              columns={[
                { content: accessRequest.email },
                { content: accessRequest.createdAt },
                { content: accessRequest.updatedAt ?? "-" },
                {
                  content: (
                    <Toggle
                      checked={accessRequest.whitelisted}
                      onChange={(e) => console.log(e)}
                    />
                  ),
                },
              ]}
            />
          ))}
        </PaginatedTable.Body>
      </PaginatedTable>
    );

  return <></>;
}

export { AccessRequestPage };
