import readline from 'readline/promises';
import {stdin,stdout} from "process";


const main = async () => {

     const cin = readline.createInterface({ input :stdin, output: stdout });
     let choice;
     do {
    console.log("welcome to shopping cart ");
    console.log("1 ----------- Add to cart");
    console.log("2 ----------- Show Cart");
    console.log("3 ----------- Remove Items");
    console.log("4 ----------- Update Quantity");
    console.log("5 ----------- Checkout");
    let choice = await  cin.question("Enter your choice");
    console.log('Entered choice :', choice);
    switch(choice){
        case 1:
            console.log('add to cart');
            break;
        case 2:
            console.log('show cart items');
            break;
        case 3:
            console.log('remove items');
            break;
        case 4:
            console.log('update quantity');
            break;
        case 5:
            console.log('see you later...');
            break;
        default:
            console.log("Invalid choice ! try again ");
    };
    } while (choice != 5);
    cin.close();
};

main();