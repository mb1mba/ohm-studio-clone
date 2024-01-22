import React from "react";
import { useParams } from "react-router-dom";
import { CardDiv, CardImage, Card } from "/src/components/Shared";

const Collections = () => {
  const { collectionName } = useParams();
  return (
    <div className=" m-auto ">
      <CardDiv text="BAN - Gray" price="1.4400,00" align="between">
        <Card size="md">
          <CardImage src="/images/ban-gray.webp" />
        </Card>
      </CardDiv>
    </div>
  );
};

export default Collections;
