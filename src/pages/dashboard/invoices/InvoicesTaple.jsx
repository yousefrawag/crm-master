import DataTable from "react-data-table-component";
import "../tableStyle/TableStyle.scss";

const InvoicesTaple = ({data, columns}) => {
  return (
    <>
      <div className="main_table_styles">
        <DataTable
          columns={columns}
          data={data}
          selectableRows
          fixedHeader
          pagination
        ></DataTable>
      </div>
    </>
  )
}

export default InvoicesTaple