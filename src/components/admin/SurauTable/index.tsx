import { columns } from "./columns";
import { DataTable } from "./data-table";
import { api } from "../../../utils/api";

const SurauTable = () => {
  const data = api.surau.getAllSurau.useQuery();

  return (
    <div>
      {data.data ? (
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <DataTable columns={columns} data={data.data} />
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SurauTable;
