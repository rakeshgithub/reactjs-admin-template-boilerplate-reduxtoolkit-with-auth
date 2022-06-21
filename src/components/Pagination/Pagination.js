import { Pagination } from "react-bootstrap";
import { createBrowserHistory } from "history";

export const PaginationList = (props) => {
  const { paginationData } = props;
  const page = paginationData.page || 1;
  const totalPages = paginationData.totalPages || 0;
  const recordsPerPage = paginationData.recordsPerPage || 10;

  let active = Number(page);
  let items = [];
  let numberOfPages = Math.ceil(totalPages / recordsPerPage);

  const handlePagination = async (pageNumber) => {
    props.setLoading(true);
    createBrowserHistory().push(`/defaulters?page=${pageNumber}`);
    props.setPage(pageNumber);
  };
  for (let number = 1; number <= numberOfPages; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => handlePagination(number, props)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div>
      <Pagination>{items}</Pagination>
      {/* <br />

      <Pagination size="lg">{items}</Pagination>
      <br />

      <Pagination size="sm">{items}</Pagination> */}
    </div>
  );
};
