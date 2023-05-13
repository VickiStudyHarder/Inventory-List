import React, { useState } from "react";
import ListItem from "./ListItem";
import InputField from "./InputField";
import Pagination from "./Pagination";

function ItemList({
  items,
  activeItem,
  onItemSelect,
  onItemDelete,
  onAddItem,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // 每页显示的项目数量
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedItems = items.slice(startIndex, endIndex);

  const totalPages = Math.ceil(items.length / itemsPerPage);
  // const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="list-container">
      <InputField onAddItem={onAddItem} />
      <div className="item-count">
        List - Page {currentPage}/{totalPages} (Total - {items.length})
      </div>

      {displayedItems.map((item, index) => (
        <ListItem
          key={index}
          name={item}
          isActive={index === activeItem}
          onClick={() => onItemSelect(index)}
          onDelete={() => onItemDelete(index)}
        />
      ))}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default ItemList;
