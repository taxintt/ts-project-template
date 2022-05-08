function outputHello(text: string): string {
  return `Hello ${text}!`;
}

function dummyHello(text: string): string {
  return "Hello dummy!";
}

export const hello = outputHello;