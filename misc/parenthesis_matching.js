/**
 * Find if a parenthesis is in order or not;
 * Valid : [(){}]{}
 * Invalid: [(])
 * Invalid: []{
 */

function parenthesisMapping(input) {
    let isValid = false;
    let stack = [];

    for (let i = 0; i < input.length; i++) {
        if (
            input[i] === "[" ||
            input[i] === "(" ||
            input[i] === "{"
        ) {
            stack.push(input[i]);
        } else { // } ] )
            if (input[i] === "}") {
                const stackPointerBracket = stack[stack.length - 1];
                if (stackPointerBracket !== "{") {
                    break;
                } else {
                    stack.pop();
                }
            }
            if (input[i] === "]") {
                const stackPointerBracket = stack[stack.length - 1];
                if (stackPointerBracket !== "[") {
                    break;
                } else {
                    stack.pop()
                }
            }
            if (input[i] === ")") {
                const stackPointerBracket = stack[stack.length - 1];
                if (stackPointerBracket !== "(") {
                    break;
                } else {
                    stack.pop()
                }
            }

        }
    }

    if (stack.length === 0) {
        isValid = true;
    }
    return isValid;
}

// console.log(parenthesisMapping(`[(]{`))// False
// console.log(parenthesisMapping(`[()]{}{[()()]()}`));
console.log(parenthesisMapping(`[[(])`));