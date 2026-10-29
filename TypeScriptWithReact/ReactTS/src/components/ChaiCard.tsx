interface ChaiCardProp {
    name: string;
    price: number;
    isSpecial?: boolean;
};

export const ChaiCard = ({name, price, isSpecial = false}: ChaiCardProp) => {
    return (
        <article>
            <h2>{name} {isSpecial && "⭐"}</h2>
            <p>{price}</p>
        </article>
    );
};