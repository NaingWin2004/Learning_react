import Card from "../components/Card.jsx";
const Body = () => {
    const fruits = [
        {
            id: 1,
            name: "Banana",
            price: 1.99,
            title: "Best qulitity from Thi"
        },
        {
            id: 2,
            name: "Apple",
            price: 1.99,
            title: "Best qulitity from Japan"
        },
        {
            id: 3,
            name: "Kiwi",
            price: 1.99,
            title: "Best qulitity from Thi"
        },
        {
            id: 4,
            name: "Water Melon",
            price: 1.99,
            title: "Best qulitity from Thi"
        },
        {
            id: 5,
            name: "Mango",
            price: 1.99,
            title: "Best qulitity from Thi"
        }
    ];
    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {fruits.map(fruit => (
                    <Card key={fruit.id} fruit={fruit} />
                ))}
            </div>
        </div>
    );
};

export default Body;
