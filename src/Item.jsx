// eslint-disable-next-line react/prop-types
export const Item = ({ name, isPacked}) => {
    // if (isPacked) {
    //     return <li className="item">{name} ✅</li>;
    //   }
    //   return <li className="item">{name}</li>;
    {isPacked ? name + ' ✅' : name}
    // ? = es el "if" , el cuestionamiento
    // : = else
}
