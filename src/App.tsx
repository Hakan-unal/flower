import { Row, Typography, Col, Image, Switch, Card } from "antd";
import { useState } from "react";
import { translator } from "./language/language";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";

import flower1 from "../src/assets/flower1.jpg"
import flower2 from "../src/assets/flower2.jpeg"
import flower3 from "../src/assets/flower3.jpg"
import flower4 from "../src/assets/flower4.jpg"


const staticArr = [{ title: "flower1",description:"description1",image:flower1},{ title: "flower2",description:"description2",image:flower2 },{ title: "flower3",description:"description3" ,image:flower3},{ title: "flower4",description:"description4" ,image:flower4}];

const { Title, Paragraph } = Typography;

const App = () => {
  const [translate, setTranslate] = useState<string>("uk");
  const [current, setCurrent] = useState<number>(3);

  const handleFlower = (type: string) => {
    let tempCurrent=current;

    switch (type) {
      case "left":
        
        tempCurrent--;
        if(tempCurrent===-1)tempCurrent=3
        setCurrent(tempCurrent);
        break;
      case "right":
        tempCurrent++;
        if(tempCurrent===4)tempCurrent=0
        setCurrent(tempCurrent);
        break;
    }
  };

  return (
    <Row justify={"center"}>
      <Col span={16} md={8}>
        <Card
          cover={<Image src={staticArr[current].image} />}
          title={
            <Row justify="space-between">
              <Col span={4} md={2}>
                <IoIosArrowDropleft
                  onClick={() => handleFlower("left")}
                  style={{ cursor: "pointer" }}
                  size={25}
                />
              </Col>
              <Col span={6} md={6}>
                <Switch
                  unCheckedChildren={<div>UK</div>}
                  checkedChildren={<div>EN</div>}
                  onChange={(checked) => setTranslate(checked ? "en" : "uk")}
                />
              </Col>
              <Col span={4} md={2}>
                <IoIosArrowDropright
                  onClick={() => handleFlower("right")}
                  style={{ cursor: "pointer" }}
                  size={25}
                />
              </Col>
            </Row>
          }
        >
          <Title level={3}> {translator(staticArr[current].title, translate)}</Title>
          <Paragraph> {translator(staticArr[current].description, translate)}</Paragraph>
        </Card>
      </Col>
    </Row>
  );
};

export default App;
