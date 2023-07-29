import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import utc from "dayjs/plugin/utc";
import { PageLoad } from "@/components/ui/PageLoad/PageLoad";
import { PaginatedTable } from "@/components/ui/PaginatedTable/PaginatedTable";
import { Toggle } from "@/components/ui/Toggle/Toggle";
import { usePaginatedList } from "@/hooks/usePaginatedList";
import { AccessRequest } from "@/models/AccessRequest";
import { nop } from "@/utils/_";
import { ReactNode } from "react";
dayjs.extend(localizedFormat);
dayjs.extend(utc);

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
    setQuery,
  } = usePaginatedList<AccessRequest>("access-request");

  if (isLoading) return <PageLoad />;

  if (accessRequests && pagination)
    return (
      <div className="mx-auto p-16 max-w-[1280px]">
        <PaginatedTable
          data={accessRequests}
          pagination={{
            data: pagination,
            position: "top",
          }}
          onPageChange={(page) =>
            page ? setQuery({ page: page.toString() }) : nop
          }
        >
          <PaginatedTable.Header columns={headerColumns} />
          <PaginatedTable.Body>
            {accessRequests.map((accessRequest) => (
              <PaginatedTable.Row
                key={accessRequest.id?.toString()}
                columns={[
                  { content: accessRequest.email },
                  {
                    content: dayjs
                      .utc(accessRequest.createdAt)
                      .local()
                      .format("LLL"),
                  },
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
      </div>
    );

  return <></>;
}

export { AccessRequestPage };
