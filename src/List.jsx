/* eslint-disable react/jsx-key */

function List() {

    const fruits = [{ id:1, name :"apple", calories:95},
        {id:2, name :"orange",calories:45},
        { id:3,name:"banana",calories:105},
        { id:4,name:"coconut",calories:159},
        {id:5, name:"pineapple",calories:37}];


    const ListItems = fruits.map(fruits => <li key={fruits.id}>{fruits.name}</li>)
    /* react will like that we use the key item just so it can keep gtrack of it been inserted or removed  */
    
   /*  return(fruits); */
   return(<ol>{ListItems}</ol>)
}
export default List



/*we need to return our array of fruits
we wANT TO CONVETRT OUR ARRAY OF STRINGS INTO AN ARRAY OF LIST ITEMS
*/