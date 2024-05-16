import React, { useState } from "react";
import { Table, Popconfirm, Button, Input } from "antd";
import InputForm from "../InputForm";
import "./index.css";

const ProductList = () => {
  const [inputValue, setSearchInput] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [isClicked, setClickValue] = useState(false);
  const [dataSource, setDataSource] = useState([
    {
      key: "1",
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      category: "smartphones",
      price: 29990.0,
    },
    {
      key: "2",
      title: "iPhone X",
      description:
        "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      price: 91900.0,
      category: "smartphones",
    },
    {
      key: "3",
      title: "Samsung Universe 9",
      description:
        "Samsung's new variant which goes beyond Galaxy to the Universe",
      price: 99990.0,
      category: "smartphones",
    },
    {
      key: "4",
      title: "OPPOF19",
      description: "OPPO F19 is officially announced on April 2021.",
      price: 28000,
      category: "smartphones",
    },
    {
      key: "5",
      title: "Huawei P30",
      description:
        "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      price: 49900,
      category: "smartphones",
    },
    {
      key: "6",
      title: "MacBook Pro",
      description:
        "MacBook Pro 2021 with mini-LED display may launch between September, November",
      price: 174900,
      category: "laptops",
    },
    {
      key: "7",
      title: "Samsung Galaxy Book",
      description:
        "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
      price: 149900,
      category: "laptops",
    },
    {
      key: "8",
      title: "Microsoft Surface Laptop 4",
      description:
        "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
      price: 149900,
      category: "laptops",
    },
    {
      key: "9",
      title: "Infinix INBOOK",
      description:
        "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
      price: 109900,
      category: "laptops",
    },
    {
      key: "10",
      title: "HP Pavilion 15-DK1056WM",
      description:
        "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
      price: 109900,
      category: "laptops",
    },
    {
      key: "11",
      title: "perfume Oil",
      description:
        "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oi",
      price: 130,
      category: "fragrances",
    },
    {
      key: "12",
      title: "Brown Perfume",
      description: "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml",
      price: 400,
      category: "fragrances",
    },
    {
      key: "13",
      title: "Fog Scent Xpressio Perfume",
      description:
        "Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men",
      price: 130,
      category: "fragrances",
    },
    {
      key: "14",
      title: "Non-Alcoholic Concentrated Perfume Oil",
      description:
        "Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil",
      price: 1200,
      category: "fragrances",
    },
    {
      key: "15",
      title: "Eau De Perfume Spray",
      description:
        "Genuine Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality",
      price: 300,
      category: "fragrances",
    },
    {
      key: "16",
      title: "Hyaluronic Acid Serum",
      description:
        "L'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid",
      price: 190,
      category: "skincare",
    },
    {
      key: "17",
      title: "Tree Oil 30ml",
      description:
        "Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,",
      price: 120,
      category: "skincare",
    },
    {
      key: "18",
      title: "Oil Free Moisturizer 100ml",
      description:
        "Dermive Oil Free Moisturizer with SPF 20 is specifically formulated with ceramides, hyaluronic acid & sunscreen.",
      price: 200,
      category: "skincare",
    },
    {
      key: "19",
      title: "Skin Beauty Serum.",
      description:
        "Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m",
      price: 399,
      category: "skincare",
    },
    {
      key: "20",
      title: "Freckle Treatment Cream- 15gm",
      description:
        "Fair & Clear is Pakistan's only pure Freckle cream which helpsfade Freckles, Darkspots and pigments. Mercury level is 0%, so there are no side effects.",
      price: 170,
      category: "skincare",
    },
    {
      key: "21",
      title: "- Daal Masoor 500 grams",
      description: "Fine quality Branded Product Keep in a cool and dry place",
      price: 200,
      category: "groceries",
    },
    {
      key: "22",
      title: "Elbow Macaroni - 400 gm",
      description: "Product details of Bake Parlor Big Elbow Macaroni - 400 gm",
      price: 144,
      category: "groceries",
    },
    {
      key: "23",
      title: "Orange Essence Food Flavou",
      description:
        "Specifications of Orange Essence Food Flavour For Cakes and Baking Food Item",
      price: 149,
      category: "groceries",
    },
    {
      key: "24",
      title: "cereals muesli fruit nuts",
      description:
        "original fauji cereal muesli 250gm box pack original fauji cereals muesli fruit nuts flakes breakfast cereal break fast faujicereals cerels cerel foji fouji",
      price: 460,
      category: "groceries",
    },
    {
      key: "25",
      title: "Gulab Powder 50 Gram",
      description:
        "Dry Rose Flower Powder Gulab Powder 50 Gram • Treats Wounds",
      price: 700,
      category: "groceries",
    },
    {
      key: "26",
      title: "Plant Hanger For Home",
      description:
        "Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf",
      price: 411,
      category: "home-decoration",
    },
    {
      key: "27",
      title: "Flying Wooden Bird",
      description:
        "Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm",
      price: 511,
      category: "home-decoration",
    },
    {
      key: "28",
      title: "3D Embellishment Art Lamp",
      description:
        "3D led lamp sticker Wall sticker 3d wall art light on/off button cell operated (included)",
      price: 200,
      category: "home-decoration",
    },
    {
      key: "29",
      title: "Handcraft Chinese style",
      description:
        "Handcraft Chinese style art luxury palace hotel villa mansion home decor ceramic vase with brass fruit plate",
      price: 600,
      category: "home-decoration",
    },
    {
      key: "30",
      title: "Key Holder",
      description:
        "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
      price: 54,
      category: "home-decoration",
    },
  ]);

  const handleDelete = (key) => {
    const newData = dataSource.filter((item) => item.key !== key);
    setDataSource(newData);
  };

  const handleEdit = (key) => {
    const newData = dataSource.filter((item) => item.key === key);
    setDataSource(newData);
  };

  const setInputValue = (event) => {
    setSearchInput(event.target.value);
  };

  const setInputDescriptionValue = (event) => {
    setDescriptionValue(event.target.value);
  };

  const getFilteredData = () => {
    const filteredData = dataSource.filter((eachItem) =>
      eachItem.title.toLowerCase().includes(inputValue.toLowerCase())
    );
    const finelData = filteredData.filter((eachItem) =>
      eachItem.description
        .toLowerCase()
        .includes(descriptionValue.toLowerCase())
    );
    return finelData;
  };

  const columns = [
    {
      title: (
        <Input
          placeholder="Product Name"
          onChange={setInputValue}
          value={inputValue}
        />
      ),
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: (
        <Input
          placeholder="Product Description"
          onChange={setInputDescriptionValue}
          value={descriptionValue}
        />
      ),
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Category",
      key: "category",
      dataIndex: "category",
      filters: [
        {
          text: "Smartphones",
          value: "smartphones",
        },

        {
          text: "Laptops",
          value: "laptops",
        },
        {
          text: "Fragrances",
          value: "fragrances",
        },
        {
          text: "Skincare",
          value: "skincare",
        },
        {
          text: "Groceries",
          value: "groceries",
        },
        {
          text: "Home decoration",
          value: "home-decoration",
        },
      ],
      onFilter: (value, record) => record.category.startsWith(value),
      filterSearch: true,
      width: "40%",
    },
    {
      title: "Delete Item",
      dataIndex: "operation",
      render: (_, record) => (
        <Popconfirm
          title="Sure to delete?"
          onConfirm={() => handleDelete(record.key)}
        >
          <Button danger>Delete</Button>
        </Popconfirm>
      ),
    },
    {
      title: "operation",
      dataIndex: "operation",
      render: (_, record) => (
        <Popconfirm
          title="Sure to Edit?"
          onConfirm={() => handleEdit(record.key)}
        >
          <Button type="primary">Edit</Button>
        </Popconfirm>
      ),
    },
  ];

  const getForm = () => {
    setClickValue((oldValue) => !oldValue);
  };

  const getDatails = (newValue) => {
    setDataSource((oldValue) => [...oldValue, newValue]);
  };
  const RenderPage = () => {
    const page = isClicked ? (
      <InputForm getDatails={getDatails} getForm={getForm} />
    ) : (
      <Table columns={columns} dataSource={getFilteredData()} />
    );
    return page;
  };

  const buttonText = isClicked ? "Close" : "Add Product";

  return (
    <div>
      <div className="add_botton_container">
        <Button type="primary" className="add_botton" onClick={getForm}>
          {buttonText}
        </Button>
      </div>
      <RenderPage />
    </div>
  );
};

export default ProductList;
