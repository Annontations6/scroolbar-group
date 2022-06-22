var groups = new Decimal("0");
var persec = new Decimal("0");
var perclick = new Decimal("1");

document.getElementById("click").onclick = () => {
    groups = groups.add(perclick)
    document.getElementById("score").innerHTML = "You Have " + groups + " Groups"
}

function Groups_CreateUpgrade(id, price, name, description, price_mul, element_id, add1, add2) {
    document.getElementById(element_id).innerHTML = name + " (" + id + ")" + " <br>" + description + "<br>Cost:" + price + "</br>"
    document.getElementById(element_id).onclick = () => {
        groups = groups.sub(price)
        price = price.mul(price_mul)
        persec = persec.add(add1)
        perclick = perclick.add(add2)
        document.getElementById("score").innerHTML = "You Have " + groups + " Groups"
        document.getElementById(element_id).innerHTML = name + " (" + id + ")" + " <br>" + description + "<br>Cost:" + price + "</br>"
    }
}

Groups_CreateUpgrade(0, new Decimal("100"), "Add Click", "Has add 1 click anymore is do!", new Decimal("1.2"), "cost1", new Decimal("0"), new Decimal("1"))
Groups_CreateUpgrade(1, new Decimal("10000"), "Add Per Second", "Has this know ffff", new Decimal("1.5"), "cost2", new Decimal("2"), new Decimal("0"))

setInterval(() => {
    groups = groups.add(persec);
    document.getElementById("score").innerHTML = "You Have " + groups + " Groups"
}, 100);