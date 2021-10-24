import { useEffect, useState } from "react";
import Card from "../Card/Card";

const Layout = () => {
  const [data, setData] = useState(null);

  const fetchData = () => {
    fetch(
      "https://pixabay.com/api/?key=13590376-d01056b8c3b3030d4ab3d38a5&q=yellow+flowers&image_type=photo&per_page=8"
    )
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);

  return (
    <div className="container pt-3">
      <div className="row">
        {data &&
          data.hits.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              likes={item.likes}
              views={item.views}
              image={item.webformatURL}
              tags={item.tags}
              user={item.user}
            />
          ))}
      </div>
    </div>
  );
};

export default Layout;
