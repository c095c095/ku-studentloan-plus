const encrypt = (text, key) => {
  const textToChars = (text) => text.split('').map(c => c.charCodeAt(0));
  const byteHex = (n) => ("0" + Number(n).toString(16)).substr(-2);
  const applyKeyToChar = (code) => textToChars(key).reduce((a, b) => a ^ b, code);

  return text.split('')
  .map(textToChars)
  .map(applyKeyToChar)
  .map(byteHex)
  .join('');
};

const decrypt = (text, key) => {
  const textToChars = (text) => text.split('').map(c => c.charCodeAt(0));
  const applyKeyToChar = (code) => textToChars(key).reduce((a, b) => a ^ b, code);
  return text.match(/.{1,2}/g)
  .map(hex => parseInt(hex, 16))
  .map(applyKeyToChar)
  .map(charCode => String.fromCharCode(charCode))
  .join('');
};

const oldBody = document.body;
const container = document.createElement('div');

const newBody = document.createElement('div');
newBody.innerHTML = `
  <div class="relative flex flex-col min-h-screen bg-gray-100">
    <div class="flex flex-1 flex-col">
      <header class="sticky top-0 z-10 w-full border-b bg-white bg-opacity-95 backdrop-filter backdrop-blur px-6 md:px-8">
        <div class="w-full max-w-6xl mx-auto">
          <div class="flex h-14 items-center">
            <div class="mr-4 hidden md:flex">
              <a class="mr-4 flex items-center space-x-2 lg:mr-6" href="index.php">
                <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 337 432" class="h-10 w-10">
                  <title>KU thai 80</title>
                  <style>
                    .s0 {
                      fill: #b1ba1d;
                    }
                    .s1 {
                      fill: #006b67;
                    }
                  </style>
                  <g id="Layer 1">
                    <g id="&lt;Group&gt;">
                      <g id="&lt;Group&gt;">
                        <path
                          id="&lt;Path&gt;"
                          class="s0"
                          d="m1.8 309.5v-44.1h334.3v44.1z"
                        />
                        <g id="&lt;Group&gt;">
                          <path
                            id="&lt;Path&gt;"
                            class="s1"
                            d="m292.7 0.9v144.2c0 25.9-15.6 41.3-39.2 41.3-23.8 0-38.9-15.4-38.9-41.3v-130.2c0-7.7-6.2-14-13.9-14l-23 0.1h-7-32.2-1.9-7.3q-1.7 0-3.5 0.4c-3.1 0.8-6 2.5-8.1 5.2l-71.9 88.4v-94.1h-44.1v220.6h44.1v-67.3l29.1-34.5 57.7 101.8h51.2l-79.9-134.9 64-76.4c0.5-0.5 1.2-0.7 1.9-0.4 0.5 0.2 0.9 0.7 0.9 1.4v35.9 30.5 69.1c0 47.5 36.6 78.6 82.8 78.6 46.1 0 82.7-31.1 82.7-78.6v-145.8z"
                          />
                          <path
                            id="&lt;Path&gt;"
                            class="s1"
                            d="m2 337.4v35.6h5.3v-4.8q0.9 1.2 2 2.2 1.1 0.9 2.3 1.6 1.3 0.7 2.7 1.1 1.5 0.3 3.1 0.3 2.8 0 5.2-0.9 2.4-1 4.1-2.7 1.6-1.8 2.6-4.2 0.9-2.4 0.9-5.4v-22.8h-5.2v21.9q0 2.4-0.6 4.2-0.5 1.8-1.6 3-1.1 1.2-2.7 1.8-1.5 0.5-3.5 0.5-1.2 0-2.3-0.3-1.1-0.4-2.2-1.1-1-0.7-1.9-1.7-0.9-0.9-1.5-2-0.7-1.2-1.1-2.5-0.3-1.2-0.3-2.6v-21.2z"
                          />
                          <path
                            id="&lt;Path&gt;"
                            class="s1"
                            d="m42.9 337.4v35.6h5.2v-13.4l13.1-10.4q2.7 0.9 4.1 3.2 1.3 2.3 1.3 5.8v14.8h5.2v-15.4q0-1.9-0.4-3.6-0.4-1.8-1.2-3.4-0.7-1.5-1.9-2.8-1.2-1.2-2.8-2.1l7.1-5.3-3.1-3.7-21.4 16.8v-16.1z"
                          />
                          <path
                            id="&lt;Path&gt;"
                            class="s1"
                            d="m97 373h5.1v-24.3q0-2.8-0.7-5-0.8-2.2-2.2-3.6-1.5-1.5-3.6-2.3-2.2-0.8-5-0.8-3.8 0-6.6 1.5-2.7 1.4-4.4 4.1l4.1 2.4q1.1-1.8 2.9-2.6 1.7-0.9 4-0.9 1.7 0 3 0.6 1.2 0.5 1.9 1.4 0.8 1 1.1 2.3 0.4 1.4 0.4 3z"
                          />
                          <path
                            id="&lt;Path&gt;"
                            class="s1"
                            d="m136.4 364.5q0.8-2.6 0.8-5.5v-7.7q0-3.2-0.9-5.8-0.9-2.7-2.7-4.5-1.8-1.9-4.3-2.9-2.5-1.1-5.7-1.1-2 0-3.9 0.5-1.9 0.6-3.5 1.5-1.7 1-3 2.4-1.4 1.4-2.3 3.2l4.3 2.3q0.6-1.2 1.5-2.2 0.9-1 2-1.7 1.1-0.7 2.3-1 1.3-0.4 2.6-0.4 2.3 0 3.9 0.8 1.6 0.8 2.6 2.1 1 1.3 1.5 3.1 0.5 1.7 0.5 3.7v7.6q0 2.1-0.5 3.9-0.6 1.8-1.6 3.1-1.1 1.3-2.7 2.1-1.6 0.8-3.7 0.8-1.1 0-2.1-0.3-1.1-0.2-2.1-0.7-1-0.4-1.8-1.1-0.9-0.6-1.6-1.4l-3.6 2.9q1 1.3 2.3 2.3 1.3 0.9 2.7 1.6 1.5 0.6 3 0.9 1.6 0.3 3.2 0.3 3.6 0 6.1-1.1 2.6-1.2 4.3-3.1 1.6-2 2.4-4.6z"
                          />
                          <path
                            id="&lt;Path&gt;"
                            class="s1"
                            d="m138.4 326h-25.3v4.2h25.3z"
                          />
                          <path
                            id="&lt;Path&gt;"
                            class="s1"
                            d="m171.7 343.9q1.1 1.2 1.7 3 0.7 1.8 0.7 4.1v22h5.2v-22.8q0-3-0.9-5.4-1-2.4-2.7-4.2-1.7-1.7-4-2.7-2.4-1-5.3-1-1.6 0-3 0.4-1.4 0.4-2.7 1-1.3 0.7-2.4 1.7-1.1 0.9-2 2.1v-4.7h-5.2v35.6h5.2v-21.2q0-1.4 0.4-2.7 0.3-1.2 1-2.4 0.6-1.1 1.4-2.1 0.9-0.9 1.9-1.6 1-0.7 2.1-1.1 1.1-0.4 2.2-0.4 2 0 3.6 0.6 1.6 0.6 2.8 1.8z"
                          />
                          <path
                            id="&lt;Path&gt;"
                            class="s1"
                            d="m191.7 357.5q-0.6 1.1-0.9 2.2-0.2 1.2-0.2 2.5 0 0.7 0.2 1.9 0.2 1.1 0.8 2.4 0.5 1.2 1.6 2.5 1 1.3 2.7 2.3 1.7 1 4.1 1.6 2.3 0.6 5.6 0.6 4.2 0 7.1-1 2.9-1.1 4.7-3 1.8-2 2.6-4.8 0.8-2.8 0.8-6.3v-21h-5.3v21q0 2.3-0.5 4.2-0.4 2-1.5 3.4-1.2 1.4-3.1 2.2-1.9 0.8-4.8 0.8-2.2 0-4-0.5-1.9-0.5-3.2-1.4-1.3-0.9-2-2.1-0.7-1.1-0.7-2.5 0-1.5 0.5-2.6 0.6-1.2 1.8-2.1 1.2-0.8 3-1.2 1.8-0.4 4.4-0.4v-4.3q-2.6 0-4.4-0.3-1.8-0.3-3-0.9-1.2-0.7-1.8-1.6-0.5-0.9-0.5-2 0-1.3 0.2-2.3 0.3-0.9 0.8-1.6 0.6-0.6 1.5-0.9 1-0.3 2.4-0.3h4.8v-4.6h-5.5q-2.3 0-4.1 0.7-1.7 0.8-2.9 2.1-1.2 1.3-1.7 3.1-0.6 1.7-0.6 3.7 0 1.2 0.3 2.2 0.3 1 0.9 2 0.5 0.9 1.4 1.6 0.9 0.8 2.1 1.3-1.2 0.7-2.1 1.6-0.9 0.8-1.5 1.8z"
                          />
                          <path
                            id="&lt;Path&gt;"
                            class="s1"
                            d="m251.1 373v-24.3q0-2.8-0.7-5-0.8-2.2-2.2-3.6-1.5-1.5-3.6-2.3-2.2-0.8-5-0.8-3.8 0-6.6 1.5-2.8 1.4-4.4 4.1l4.1 2.4q1.1-1.8 2.8-2.6 1.8-0.9 4.1-0.9 1.7 0 2.9 0.6 1.3 0.5 2 1.4 0.8 1 1.1 2.3 0.3 1.4 0.3 3v24.2z"
                          />
                          <path
                            id="&lt;Path&gt;"
                            class="s1"
                            d="m275.6 373.4v-4.4q-4.9 0-7.2-1.6-2.2-1.6-2.2-4.6 0-1.6 0.5-2.9 0.5-1.2 1.5-2.1 1.1-0.9 2.7-1.4 1.6-0.4 3.7-0.4h10.4v17h5.3v-24.1q0-5.7-3.6-8.8-3.6-3.1-11.1-3.1-2.5 0-4.5 0.4-1.9 0.4-3.6 1.2-1.6 0.7-3 1.8-1.4 1.1-2.9 2.5l3.7 3q1.1-1.1 2.2-2 1.1-0.8 2.4-1.4 1.2-0.5 2.6-0.7 1.4-0.3 3.1-0.3 2.6 0 4.4 0.5 1.7 0.5 2.9 1.5 1.1 1 1.6 2.4 0.5 1.5 0.5 3.4v2.3h-10.8q-3.1 0-5.5 0.8-2.5 0.8-4.2 2.3-1.7 1.5-2.6 3.6-0.9 2-0.9 4.6 0 2 0.8 3.9 0.7 2 2 3.3 0.9 0.9 2 1.5 1.1 0.6 2.5 1.1 1.4 0.4 3.2 0.6 1.8 0.1 4.1 0.1z"
                          />
                          <path
                            id="&lt;Path&gt;"
                            class="s1"
                            d="m280.7 329.9q1.1 0.3 2.1 0.3h16.9v-4.2h-16.2q-1 0-1.4-0.8-0.4-0.7-0.4-2.3h-4.9q0 2.2 0.5 3.6 0.6 1.5 1.5 2.3 0.8 0.8 1.9 1.1z"
                          />
                          <path
                            id="&lt;Path&gt;"
                            class="s1"
                            d="m309.6 371.3q1.7 1 4.1 1.6 2.4 0.6 5.6 0.6 4.2 0 7.1-1 2.9-1.1 4.7-3 1.8-2 2.6-4.8 0.8-2.8 0.8-6.3v-21h-5.3v21q0 2.3-0.5 4.2-0.4 2-1.5 3.4-1.1 1.4-3 2.2-2 0.8-4.9 0.8-2.2 0-4-0.5-1.9-0.5-3.2-1.4-1.3-0.9-2-2.1-0.7-1.1-0.7-2.5 0-1.5 0.6-2.6 0.5-1.2 1.7-2.1 1.2-0.8 3-1.2 1.8-0.4 4.4-0.4v-4.3q-2.6 0-4.4-0.3-1.8-0.3-3-0.9-1.2-0.7-1.7-1.6-0.6-0.9-0.6-2 0-1.3 0.2-2.3 0.3-0.9 0.8-1.6 0.6-0.6 1.5-0.9 1-0.3 2.4-0.3h4.8v-4.6h-5.5q-2.3 0-4.1 0.7-1.7 0.8-2.9 2.1-1.1 1.3-1.7 3.1-0.6 1.7-0.6 3.7 0 1.2 0.3 2.2 0.3 1 0.9 2 0.6 0.9 1.4 1.6 0.9 0.8 2.1 1.3-1.2 0.7-2.1 1.6-0.9 0.8-1.5 1.8-0.6 1.1-0.9 2.2-0.2 1.2-0.2 2.5 0 0.7 0.2 1.9 0.2 1.1 0.8 2.4 0.5 1.2 1.6 2.5 1 1.3 2.7 2.3z"
                          />
                          <path
                            id="&lt;Path&gt;"
                            class="s1"
                            d="m10.9 422q-0.1-0.4-0.1-1.1v-26.1h-9v26.2q0 2.1 0.5 3.9 0.5 1.7 1.7 2.9 1.1 1.3 2.8 1.9 1.8 0.7 4.3 0.7h4.6v-8h-3.9q-0.7 0-0.9-0.4z"
                          />
                          <path
                            id="&lt;Path&gt;"
                            class="s1"
                            d="m46.3 398.3q-2-1.9-5.1-2.9-3.1-1-7.3-1-3.2 0-6 0.7-2.8 0.7-5.2 2-2.3 1.4-4.1 3.5-1.8 2.1-3 4.8l4 5.3v19.7h8.8v-21.1l-2.9-4.2q0.8-1 1.9-1.5 1-0.6 2.2-0.9 1.1-0.3 2.2-0.4 1.1-0.1 2-0.1 3.8-0.1 5.8 1.8 1.9 1.9 1.9 5.7v20.7h8.8v-21.3q0-3.4-1-6.1-1-2.8-3-4.7z"
                          />
                          <path
                            id="&lt;Path&gt;"
                            class="s1"
                            d="m88.4 394.8h-8.9v12.7h-2.2q-0.3 0-0.5-0.6-0.2-0.5-0.2-1.9h-7.9q0 2 0.3 3.6 0.3 1.5 0.8 2.7 0.6 1.1 1.3 1.8 0.7 0.7 1.6 1.1 0.8 0.4 1.7 0.6 1 0.2 1.9 0.2h3.2v1.3q0 3.2-1.7 4.9-1.7 1.7-4.9 1.7-3.1 0-4.8-1.7-1.8-1.7-1.8-4.9v-21.5h-8.9v22.1q0.1 3.3 1.3 5.9 1.2 2.6 3.3 4.4 2.1 1.8 4.9 2.7 2.8 0.9 6 0.9 3.3 0 6.2-1 2.8-0.9 4.9-2.8 2.1-1.8 3.2-4.4 1.2-2.5 1.2-5.7v-1.9h4.3v-7.5h-4.3z"
                          />
                          <path
                            id="&lt;Path&gt;"
                            class="s1"
                            d="m126.9 398.8q-1.3-1.7-3.3-2.8-1.9-1.2-4.2-1.8l-6.1 5-6.2-4.9q-2.3 0.8-4.2 2-2 1.2-3.3 2.9-1.4 1.6-2.1 3.7-0.7 2-0.7 4.6v12.4q0 2.4 0.6 4.3 0.7 1.9 2 3.3 1.4 1.4 3.4 2.1 2 0.8 4.7 0.8h4v-7.9h-3.5q-0.7 0-1.1-0.1-0.5-0.2-0.7-0.5-0.3-0.3-0.4-0.8-0.1-0.5-0.1-1.1v-11.9q0-1.4 0.2-2.5 0.3-1.1 0.9-1.9l3.4 2.6q0.8 0.6 1.6 0.9 0.7 0.3 1.5 0.3 0.7 0 1.5-0.3 0.8-0.3 1.7-1l3.6-2.5q0.5 0.8 0.8 2 0.2 1.1 0.2 2.4v22.3h8.9v-22.9q-0.1-2.7-0.9-4.8-0.8-2.2-2.2-3.9z"
                          />
                          <path
                            id="&lt;Path&gt;"
                            class="s1"
                            d="m159.8 411.8q-1.5-1.2-3.6-2-2-0.8-4.3-1.4l-3.1-0.8q-0.6-0.1-1.4-0.3-0.8-0.2-1.5-0.5-0.7-0.3-1.2-0.8-0.5-0.4-0.5-1.1 0-1.2 1.1-1.9 1.1-0.8 3.2-0.8 1.1 0.1 2.1 0.2 0.9 0.1 1.9 0.4 0.9 0.2 1.9 0.8 1 0.5 2.1 1.3l5.8-5.3q-1.8-1.4-3.5-2.4-1.7-1-3.3-1.6-1.7-0.7-3.4-0.9-1.7-0.3-3.6-0.3-3.2 0-5.7 0.9-2.4 0.8-4.1 2.3-1.6 1.5-2.4 3.4-0.9 2-0.9 4.3 0 2.3 0.8 3.9 0.8 1.7 2.4 2.9 1.5 1.2 3.7 2 2.1 0.8 4.9 1.4l2.8 0.6q0.7 0.2 1.5 0.4 0.7 0.3 1.3 0.7 0.6 0.4 1 0.9 0.4 0.6 0.4 1.3 0 0.7-0.3 1.3-0.3 0.6-0.9 1.1-0.7 0.5-1.8 0.8-1.1 0.3-2.8 0.3-1.4 0-2.7-0.3-1.2-0.2-2.4-0.7-1.1-0.5-2.1-1.4-1-0.8-2.1-1.9l-5.5 5.9q1.6 1.6 3.2 2.8 1.6 1.2 3.4 2 1.8 0.8 3.9 1.2 2 0.3 4.5 0.3 3.7 0 6.4-0.9 2.7-1 4.5-2.6 1.9-1.5 2.8-3.6 0.9-2.1 0.9-4.3 0-2.6-0.9-4.4-0.9-1.9-2.5-3.2z"
                          />
                          <path
                            id="&lt;Path&gt;"
                            class="s1"
                            d="m198.2 401.1l6.3-6.1-5.9-5.5-6.6 6.4q-1.8-0.7-3.8-1.1-2-0.4-4.1-0.4-2.1 0-4.1 0.4-2 0.3-3.8 1.1-1.8 0.7-3.2 1.9-1.5 1.1-2.6 2.7-1.1 1.5-1.7 3.5-0.6 2-0.6 4.3v22.1h8.8v-10.5q0-0.6 0.1-1.1 0.1-0.4 0.4-0.8 0.3-0.3 0.8-0.4 0.5-0.2 1.2-0.2h5.1v-7.2h-5.7q-0.4 0-0.9 0.1-0.6 0-1 0.2v-2q0-1.6 0.5-2.8 0.5-1.1 1.5-1.9 0.9-0.8 2.2-1.1 1.4-0.4 3-0.4 1.7 0 3 0.4 1.3 0.4 2.2 1.2 1 0.8 1.5 2 0.5 1.3 0.5 3v21.5h8.7v-22.1q0-2.1-0.5-3.9-0.4-1.8-1.3-3.3z"
                          />
                          <path
                            id="&lt;Path&gt;"
                            class="s1"
                            d="m214.8 394.4q-3.8 0-6.9 1.7-3.1 1.7-5.4 4.9l7 4.3q1.2-1.6 2.5-2.3 1.3-0.7 2.8-0.7 1.1 0 1.8 0.4 0.7 0.3 1.2 0.9 0.5 0.6 0.7 1.4 0.1 0.9 0.1 1.9v23.5h8.9v-23.7q0-5.9-3.2-9.1-3.2-3.2-9.5-3.2z"
                          />
                          <path
                            id="&lt;Path&gt;"
                            class="s1"
                            d="m260.3 389.5l-6.1 6q-1.5-0.6-3.4-0.8-1.8-0.3-3.9-0.3-2.1 0-3.9 0.2-1.7 0.3-3.3 0.8-1.5 0.6-2.9 1.5-1.5 1-3 2.4l5.5 5.3q0.8-0.7 1.6-1.2 0.8-0.5 1.7-0.8 0.8-0.4 1.8-0.5 1-0.2 2.2-0.2 1.7 0 3 0.3 1.3 0.3 2.1 1 0.8 0.7 1.1 1.8 0.4 1 0.4 2.5v1.3h-8.4q-3.1 0-5.4 0.9-2.4 0.9-3.9 2.4-1.5 1.5-2.3 3.4-0.7 2-0.7 4.1 0 2.7 0.9 4.8 0.9 2.1 2.6 3.5 1.6 1.4 3.9 2.1 2.3 0.7 5 0.7v-7.2q-1.2 0-2.1-0.3-0.8-0.3-1.3-0.9-0.5-0.5-0.7-1.2-0.2-0.8-0.2-1.6-0.1-0.6 0.2-1.3 0.3-0.7 0.9-1.2 0.5-0.5 1.3-0.8 0.8-0.3 1.9-0.3h8.5v14.5h8.8v-23.5q0-3.8-1.6-6.5l5.6-5.4z"
                          />
                          <path
                            id="&lt;Path&gt;"
                            class="s1"
                            d="m299.4 398.8q-1.3-1.7-3.3-2.8-1.9-1.2-4.2-1.8l-6.1 5-6.2-4.9q-2.3 0.8-4.2 2-2 1.2-3.3 2.9-1.4 1.6-2.1 3.7-0.7 2-0.7 4.6v12.4q0 2.4 0.6 4.3 0.7 1.9 2 3.3 1.4 1.4 3.4 2.1 2 0.8 4.7 0.8h4v-7.9h-3.5q-0.7 0-1.1-0.1-0.5-0.2-0.7-0.5-0.3-0.3-0.4-0.8-0.1-0.5-0.1-1.1v-11.9q0-1.4 0.2-2.5 0.3-1.1 0.9-1.9l3.4 2.6q0.8 0.6 1.6 0.9 0.7 0.3 1.5 0.3 0.7 0 1.5-0.3 0.8-0.3 1.7-1l3.6-2.5q0.5 0.8 0.8 2 0.2 1.1 0.2 2.4v22.3h8.9v-22.9q-0.1-2.7-0.9-4.8-0.8-2.2-2.2-3.9z"
                          />
                          <path
                            id="&lt;Path&gt;"
                            class="s1"
                            d="m332.3 411.8q-1.5-1.2-3.6-2-2-0.8-4.3-1.4l-3.1-0.8q-0.6-0.1-1.4-0.3-0.8-0.2-1.5-0.5-0.7-0.3-1.2-0.8-0.5-0.4-0.5-1.1 0-1.2 1.1-1.9 1.1-0.8 3.2-0.8 1.1 0.1 2.1 0.2 0.9 0.1 1.9 0.4 0.9 0.2 1.9 0.8 1 0.5 2.1 1.3l5.8-5.3q-1.8-1.4-3.5-2.4-1.7-1-3.3-1.6-1.7-0.7-3.4-0.9-1.7-0.3-3.6-0.3-3.2 0-5.7 0.9-2.4 0.8-4.1 2.3-1.6 1.5-2.4 3.4-0.9 2-0.9 4.3 0 2.3 0.8 3.9 0.8 1.7 2.4 2.9 1.5 1.2 3.7 2 2.1 0.8 4.9 1.4l2.8 0.6q0.7 0.2 1.5 0.4 0.7 0.3 1.3 0.7 0.6 0.4 1 0.9 0.4 0.6 0.4 1.3 0 0.7-0.3 1.3-0.3 0.6-1 1.1-0.6 0.5-1.7 0.8-1.1 0.3-2.8 0.3-1.5 0-2.7-0.3-1.2-0.2-2.4-0.7-1.1-0.5-2.1-1.4-1-0.8-2.1-1.9l-5.5 5.9q1.6 1.6 3.2 2.8 1.6 1.2 3.4 2 1.8 0.8 3.9 1.2 2 0.3 4.5 0.3 3.7 0 6.4-0.9 2.7-1 4.5-2.6 1.9-1.5 2.8-3.6 0.9-2.1 0.9-4.3 0-2.6-0.9-4.4-0.9-1.9-2.5-3.2z"
                          />
                          <path
                            id="&lt;Path&gt;"
                            class="s1"
                            d="m321.7 377.8q-0.9 0.1-1.7 0.5-0.9 0.4-1.6 1.1-0.7 0.7-1.2 1.8-0.6 1.1-0.9 2.8-0.3 1.6-0.3 3.9h7.5q0-1.5 0.1-2.3 0.1-0.8 0.5-0.8h12v-7.1h-12.6q-0.9 0-1.8 0.1z"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
                <span class="hidden lg:inline font-bold">ระบบกิจกรรมจิตอาสา(Volunteering Activities System)</span>
              </a>
            </div>
          </div>
        </div>
      </header>
      <div class="flex flex-col items-center justify-center space-y-6 bg-gray-100 p-6 md:p-10">
        <div class="flex w-full max-w-md flex-col space-y-6 pt-6">
          <div class="rounded-xl border bg-white text-gray-900 shadow">
            <div class="flex flex-col space-y-1.5 p-6 text-center">
              <div class="flex justify-center mb-5">
                <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 337 432" class="h-32 w-32">
                  <title>KU thai 80</title>
                  <style>.s0 { fill: #b1ba1d; } .s1 { fill: #006b67; }</style>
                  <g id="Layer 1">
                    <g id="&lt;Group&gt;">
                      <g id="&lt;Group&gt;">
                        <path id="&lt;Path&gt;" class="s0" d="m1.8 309.5v-44.1h334.3v44.1z"/>
                        <g id="&lt;Group&gt;">
                          <path id="&lt;Path&gt;" class="s1" d="m292.7 0.9v144.2c0 25.9-15.6 41.3-39.2 41.3-23.8 0-38.9-15.4-38.9-41.3v-130.2c0-7.7-6.2-14-13.9-14l-23 0.1h-7-32.2-1.9-7.3q-1.7 0-3.5 0.4c-3.1 0.8-6 2.5-8.1 5.2l-71.9 88.4v-94.1h-44.1v220.6h44.1v-67.3l29.1-34.5 57.7 101.8h51.2l-79.9-134.9 64-76.4c0.5-0.5 1.2-0.7 1.9-0.4 0.5 0.2 0.9 0.7 0.9 1.4v35.9 30.5 69.1c0 47.5 36.6 78.6 82.8 78.6 46.1 0 82.7-31.1 82.7-78.6v-145.8z"/>
                          <path id="&lt;Path&gt;" class="s1" d="m2 337.4v35.6h5.3v-4.8q0.9 1.2 2 2.2 1.1 0.9 2.3 1.6 1.3 0.7 2.7 1.1 1.5 0.3 3.1 0.3 2.8 0 5.2-0.9 2.4-1 4.1-2.7 1.6-1.8 2.6-4.2 0.9-2.4 0.9-5.4v-22.8h-5.2v21.9q0 2.4-0.6 4.2-0.5 1.8-1.6 3-1.1 1.2-2.7 1.8-1.5 0.5-3.5 0.5-1.2 0-2.3-0.3-1.1-0.4-2.2-1.1-1-0.7-1.9-1.7-0.9-0.9-1.5-2-0.7-1.2-1.1-2.5-0.3-1.2-0.3-2.6v-21.2z"/>
                          <path id="&lt;Path&gt;" class="s1" d="m42.9 337.4v35.6h5.2v-13.4l13.1-10.4q2.7 0.9 4.1 3.2 1.3 2.3 1.3 5.8v14.8h5.2v-15.4q0-1.9-0.4-3.6-0.4-1.8-1.2-3.4-0.7-1.5-1.9-2.8-1.2-1.2-2.8-2.1l7.1-5.3-3.1-3.7-21.4 16.8v-16.1z"/>
                          <path id="&lt;Path&gt;" class="s1" d="m97 373h5.1v-24.3q0-2.8-0.7-5-0.8-2.2-2.2-3.6-1.5-1.5-3.6-2.3-2.2-0.8-5-0.8-3.8 0-6.6 1.5-2.7 1.4-4.4 4.1l4.1 2.4q1.1-1.8 2.9-2.6 1.7-0.9 4-0.9 1.7 0 3 0.6 1.2 0.5 1.9 1.4 0.8 1 1.1 2.3 0.4 1.4 0.4 3z"/>
                          <path id="&lt;Path&gt;" class="s1" d="m136.4 364.5q0.8-2.6 0.8-5.5v-7.7q0-3.2-0.9-5.8-0.9-2.7-2.7-4.5-1.8-1.9-4.3-2.9-2.5-1.1-5.7-1.1-2 0-3.9 0.5-1.9 0.6-3.5 1.5-1.7 1-3 2.4-1.4 1.4-2.3 3.2l4.3 2.3q0.6-1.2 1.5-2.2 0.9-1 2-1.7 1.1-0.7 2.3-1 1.3-0.4 2.6-0.4 2.3 0 3.9 0.8 1.6 0.8 2.6 2.1 1 1.3 1.5 3.1 0.5 1.7 0.5 3.7v7.6q0 2.1-0.5 3.9-0.6 1.8-1.6 3.1-1.1 1.3-2.7 2.1-1.6 0.8-3.7 0.8-1.1 0-2.1-0.3-1.1-0.2-2.1-0.7-1-0.4-1.8-1.1-0.9-0.6-1.6-1.4l-3.6 2.9q1 1.3 2.3 2.3 1.3 0.9 2.7 1.6 1.5 0.6 3 0.9 1.6 0.3 3.2 0.3 3.6 0 6.1-1.1 2.6-1.2 4.3-3.1 1.6-2 2.4-4.6z"/>
                          <path id="&lt;Path&gt;" class="s1" d="m138.4 326h-25.3v4.2h25.3z"/>
                          <path id="&lt;Path&gt;" class="s1" d="m171.7 343.9q1.1 1.2 1.7 3 0.7 1.8 0.7 4.1v22h5.2v-22.8q0-3-0.9-5.4-1-2.4-2.7-4.2-1.7-1.7-4-2.7-2.4-1-5.3-1-1.6 0-3 0.4-1.4 0.4-2.7 1-1.3 0.7-2.4 1.7-1.1 0.9-2 2.1v-4.7h-5.2v35.6h5.2v-21.2q0-1.4 0.4-2.7 0.3-1.2 1-2.4 0.6-1.1 1.4-2.1 0.9-0.9 1.9-1.6 1-0.7 2.1-1.1 1.1-0.4 2.2-0.4 2 0 3.6 0.6 1.6 0.6 2.8 1.8z"/>
                          <path id="&lt;Path&gt;" class="s1" d="m191.7 357.5q-0.6 1.1-0.9 2.2-0.2 1.2-0.2 2.5 0 0.7 0.2 1.9 0.2 1.1 0.8 2.4 0.5 1.2 1.6 2.5 1 1.3 2.7 2.3 1.7 1 4.1 1.6 2.3 0.6 5.6 0.6 4.2 0 7.1-1 2.9-1.1 4.7-3 1.8-2 2.6-4.8 0.8-2.8 0.8-6.3v-21h-5.3v21q0 2.3-0.5 4.2-0.4 2-1.5 3.4-1.2 1.4-3.1 2.2-1.9 0.8-4.8 0.8-2.2 0-4-0.5-1.9-0.5-3.2-1.4-1.3-0.9-2-2.1-0.7-1.1-0.7-2.5 0-1.5 0.5-2.6 0.6-1.2 1.8-2.1 1.2-0.8 3-1.2 1.8-0.4 4.4-0.4v-4.3q-2.6 0-4.4-0.3-1.8-0.3-3-0.9-1.2-0.7-1.8-1.6-0.5-0.9-0.5-2 0-1.3 0.2-2.3 0.3-0.9 0.8-1.6 0.6-0.6 1.5-0.9 1-0.3 2.4-0.3h4.8v-4.6h-5.5q-2.3 0-4.1 0.7-1.7 0.8-2.9 2.1-1.2 1.3-1.7 3.1-0.6 1.7-0.6 3.7 0 1.2 0.3 2.2 0.3 1 0.9 2 0.5 0.9 1.4 1.6 0.9 0.8 2.1 1.3-1.2 0.7-2.1 1.6-0.9 0.8-1.5 1.8z"/>
                          <path id="&lt;Path&gt;" class="s1" d="m251.1 373v-24.3q0-2.8-0.7-5-0.8-2.2-2.2-3.6-1.5-1.5-3.6-2.3-2.2-0.8-5-0.8-3.8 0-6.6 1.5-2.8 1.4-4.4 4.1l4.1 2.4q1.1-1.8 2.8-2.6 1.8-0.9 4.1-0.9 1.7 0 2.9 0.6 1.3 0.5 2 1.4 0.8 1 1.1 2.3 0.3 1.4 0.3 3v24.2z"/>
                          <path id="&lt;Path&gt;" class="s1" d="m275.6 373.4v-4.4q-4.9 0-7.2-1.6-2.2-1.6-2.2-4.6 0-1.6 0.5-2.9 0.5-1.2 1.5-2.1 1.1-0.9 2.7-1.4 1.6-0.4 3.7-0.4h10.4v17h5.3v-24.1q0-5.7-3.6-8.8-3.6-3.1-11.1-3.1-2.5 0-4.5 0.4-1.9 0.4-3.6 1.2-1.6 0.7-3 1.8-1.4 1.1-2.9 2.5l3.7 3q1.1-1.1 2.2-2 1.1-0.8 2.4-1.4 1.2-0.5 2.6-0.7 1.4-0.3 3.1-0.3 2.6 0 4.4 0.5 1.7 0.5 2.9 1.5 1.1 1 1.6 2.4 0.5 1.5 0.5 3.4v2.3h-10.8q-3.1 0-5.5 0.8-2.5 0.8-4.2 2.3-1.7 1.5-2.6 3.6-0.9 2-0.9 4.6 0 2 0.8 3.9 0.7 2 2 3.3 0.9 0.9 2 1.5 1.1 0.6 2.5 1.1 1.4 0.4 3.2 0.6 1.8 0.1 4.1 0.1z"/>
                          <path id="&lt;Path&gt;" class="s1" d="m280.7 329.9q1.1 0.3 2.1 0.3h16.9v-4.2h-16.2q-1 0-1.4-0.8-0.4-0.7-0.4-2.3h-4.9q0 2.2 0.5 3.6 0.6 1.5 1.5 2.3 0.8 0.8 1.9 1.1z"/>
                          <path id="&lt;Path&gt;" class="s1" d="m309.6 371.3q1.7 1 4.1 1.6 2.4 0.6 5.6 0.6 4.2 0 7.1-1 2.9-1.1 4.7-3 1.8-2 2.6-4.8 0.8-2.8 0.8-6.3v-21h-5.3v21q0 2.3-0.5 4.2-0.4 2-1.5 3.4-1.1 1.4-3 2.2-2 0.8-4.9 0.8-2.2 0-4-0.5-1.9-0.5-3.2-1.4-1.3-0.9-2-2.1-0.7-1.1-0.7-2.5 0-1.5 0.6-2.6 0.5-1.2 1.7-2.1 1.2-0.8 3-1.2 1.8-0.4 4.4-0.4v-4.3q-2.6 0-4.4-0.3-1.8-0.3-3-0.9-1.2-0.7-1.7-1.6-0.6-0.9-0.6-2 0-1.3 0.2-2.3 0.3-0.9 0.8-1.6 0.6-0.6 1.5-0.9 1-0.3 2.4-0.3h4.8v-4.6h-5.5q-2.3 0-4.1 0.7-1.7 0.8-2.9 2.1-1.1 1.3-1.7 3.1-0.6 1.7-0.6 3.7 0 1.2 0.3 2.2 0.3 1 0.9 2 0.6 0.9 1.4 1.6 0.9 0.8 2.1 1.3-1.2 0.7-2.1 1.6-0.9 0.8-1.5 1.8-0.6 1.1-0.9 2.2-0.2 1.2-0.2 2.5 0 0.7 0.2 1.9 0.2 1.1 0.8 2.4 0.5 1.2 1.6 2.5 1 1.3 2.7 2.3z"/>
                          <path id="&lt;Path&gt;" class="s1" d="m10.9 422q-0.1-0.4-0.1-1.1v-26.1h-9v26.2q0 2.1 0.5 3.9 0.5 1.7 1.7 2.9 1.1 1.3 2.8 1.9 1.8 0.7 4.3 0.7h4.6v-8h-3.9q-0.7 0-0.9-0.4z"/>
                          <path id="&lt;Path&gt;" class="s1" d="m46.3 398.3q-2-1.9-5.1-2.9-3.1-1-7.3-1-3.2 0-6 0.7-2.8 0.7-5.2 2-2.3 1.4-4.1 3.5-1.8 2.1-3 4.8l4 5.3v19.7h8.8v-21.1l-2.9-4.2q0.8-1 1.9-1.5 1-0.6 2.2-0.9 1.1-0.3 2.2-0.4 1.1-0.1 2-0.1 3.8-0.1 5.8 1.8 1.9 1.9 1.9 5.7v20.7h8.8v-21.3q0-3.4-1-6.1-1-2.8-3-4.7z"/>
                          <path id="&lt;Path&gt;" class="s1" d="m88.4 394.8h-8.9v12.7h-2.2q-0.3 0-0.5-0.6-0.2-0.5-0.2-1.9h-7.9q0 2 0.3 3.6 0.3 1.5 0.8 2.7 0.6 1.1 1.3 1.8 0.7 0.7 1.6 1.1 0.8 0.4 1.7 0.6 1 0.2 1.9 0.2h3.2v1.3q0 3.2-1.7 4.9-1.7 1.7-4.9 1.7-3.1 0-4.8-1.7-1.8-1.7-1.8-4.9v-21.5h-8.9v22.1q0.1 3.3 1.3 5.9 1.2 2.6 3.3 4.4 2.1 1.8 4.9 2.7 2.8 0.9 6 0.9 3.3 0 6.2-1 2.8-0.9 4.9-2.8 2.1-1.8 3.2-4.4 1.2-2.5 1.2-5.7v-1.9h4.3v-7.5h-4.3z"/>
                          <path id="&lt;Path&gt;" class="s1" d="m126.9 398.8q-1.3-1.7-3.3-2.8-1.9-1.2-4.2-1.8l-6.1 5-6.2-4.9q-2.3 0.8-4.2 2-2 1.2-3.3 2.9-1.4 1.6-2.1 3.7-0.7 2-0.7 4.6v12.4q0 2.4 0.6 4.3 0.7 1.9 2 3.3 1.4 1.4 3.4 2.1 2 0.8 4.7 0.8h4v-7.9h-3.5q-0.7 0-1.1-0.1-0.5-0.2-0.7-0.5-0.3-0.3-0.4-0.8-0.1-0.5-0.1-1.1v-11.9q0-1.4 0.2-2.5 0.3-1.1 0.9-1.9l3.4 2.6q0.8 0.6 1.6 0.9 0.7 0.3 1.5 0.3 0.7 0 1.5-0.3 0.8-0.3 1.7-1l3.6-2.5q0.5 0.8 0.8 2 0.2 1.1 0.2 2.4v22.3h8.9v-22.9q-0.1-2.7-0.9-4.8-0.8-2.2-2.2-3.9z"/>
                          <path id="&lt;Path&gt;" class="s1" d="m159.8 411.8q-1.5-1.2-3.6-2-2-0.8-4.3-1.4l-3.1-0.8q-0.6-0.1-1.4-0.3-0.8-0.2-1.5-0.5-0.7-0.3-1.2-0.8-0.5-0.4-0.5-1.1 0-1.2 1.1-1.9 1.1-0.8 3.2-0.8 1.1 0.1 2.1 0.2 0.9 0.1 1.9 0.4 0.9 0.2 1.9 0.8 1 0.5 2.1 1.3l5.8-5.3q-1.8-1.4-3.5-2.4-1.7-1-3.3-1.6-1.7-0.7-3.4-0.9-1.7-0.3-3.6-0.3-3.2 0-5.7 0.9-2.4 0.8-4.1 2.3-1.6 1.5-2.4 3.4-0.9 2-0.9 4.3 0 2.3 0.8 3.9 0.8 1.7 2.4 2.9 1.5 1.2 3.7 2 2.1 0.8 4.9 1.4l2.8 0.6q0.7 0.2 1.5 0.4 0.7 0.3 1.3 0.7 0.6 0.4 1 0.9 0.4 0.6 0.4 1.3 0 0.7-0.3 1.3-0.3 0.6-0.9 1.1-0.7 0.5-1.8 0.8-1.1 0.3-2.8 0.3-1.4 0-2.7-0.3-1.2-0.2-2.4-0.7-1.1-0.5-2.1-1.4-1-0.8-2.1-1.9l-5.5 5.9q1.6 1.6 3.2 2.8 1.6 1.2 3.4 2 1.8 0.8 3.9 1.2 2 0.3 4.5 0.3 3.7 0 6.4-0.9 2.7-1 4.5-2.6 1.9-1.5 2.8-3.6 0.9-2.1 0.9-4.3 0-2.6-0.9-4.4-0.9-1.9-2.5-3.2z"/>
                          <path id="&lt;Path&gt;" class="s1" d="m198.2 401.1l6.3-6.1-5.9-5.5-6.6 6.4q-1.8-0.7-3.8-1.1-2-0.4-4.1-0.4-2.1 0-4.1 0.4-2 0.3-3.8 1.1-1.8 0.7-3.2 1.9-1.5 1.1-2.6 2.7-1.1 1.5-1.7 3.5-0.6 2-0.6 4.3v22.1h8.8v-10.5q0-0.6 0.1-1.1 0.1-0.4 0.4-0.8 0.3-0.3 0.8-0.4 0.5-0.2 1.2-0.2h5.1v-7.2h-5.7q-0.4 0-0.9 0.1-0.6 0-1 0.2v-2q0-1.6 0.5-2.8 0.5-1.1 1.5-1.9 0.9-0.8 2.2-1.1 1.4-0.4 3-0.4 1.7 0 3 0.4 1.3 0.4 2.2 1.2 1 0.8 1.5 2 0.5 1.3 0.5 3v21.5h8.7v-22.1q0-2.1-0.5-3.9-0.4-1.8-1.3-3.3z"/>
                          <path id="&lt;Path&gt;" class="s1" d="m214.8 394.4q-3.8 0-6.9 1.7-3.1 1.7-5.4 4.9l7 4.3q1.2-1.6 2.5-2.3 1.3-0.7 2.8-0.7 1.1 0 1.8 0.4 0.7 0.3 1.2 0.9 0.5 0.6 0.7 1.4 0.1 0.9 0.1 1.9v23.5h8.9v-23.7q0-5.9-3.2-9.1-3.2-3.2-9.5-3.2z"/>
                          <path id="&lt;Path&gt;" class="s1" d="m260.3 389.5l-6.1 6q-1.5-0.6-3.4-0.8-1.8-0.3-3.9-0.3-2.1 0-3.9 0.2-1.7 0.3-3.3 0.8-1.5 0.6-2.9 1.5-1.5 1-3 2.4l5.5 5.3q0.8-0.7 1.6-1.2 0.8-0.5 1.7-0.8 0.8-0.4 1.8-0.5 1-0.2 2.2-0.2 1.7 0 3 0.3 1.3 0.3 2.1 1 0.8 0.7 1.1 1.8 0.4 1 0.4 2.5v1.3h-8.4q-3.1 0-5.4 0.9-2.4 0.9-3.9 2.4-1.5 1.5-2.3 3.4-0.7 2-0.7 4.1 0 2.7 0.9 4.8 0.9 2.1 2.6 3.5 1.6 1.4 3.9 2.1 2.3 0.7 5 0.7v-7.2q-1.2 0-2.1-0.3-0.8-0.3-1.3-0.9-0.5-0.5-0.7-1.2-0.2-0.8-0.2-1.6-0.1-0.6 0.2-1.3 0.3-0.7 0.9-1.2 0.5-0.5 1.3-0.8 0.8-0.3 1.9-0.3h8.5v14.5h8.8v-23.5q0-3.8-1.6-6.5l5.6-5.4z"/>
                          <path id="&lt;Path&gt;" class="s1" d="m299.4 398.8q-1.3-1.7-3.3-2.8-1.9-1.2-4.2-1.8l-6.1 5-6.2-4.9q-2.3 0.8-4.2 2-2 1.2-3.3 2.9-1.4 1.6-2.1 3.7-0.7 2-0.7 4.6v12.4q0 2.4 0.6 4.3 0.7 1.9 2 3.3 1.4 1.4 3.4 2.1 2 0.8 4.7 0.8h4v-7.9h-3.5q-0.7 0-1.1-0.1-0.5-0.2-0.7-0.5-0.3-0.3-0.4-0.8-0.1-0.5-0.1-1.1v-11.9q0-1.4 0.2-2.5 0.3-1.1 0.9-1.9l3.4 2.6q0.8 0.6 1.6 0.9 0.7 0.3 1.5 0.3 0.7 0 1.5-0.3 0.8-0.3 1.7-1l3.6-2.5q0.5 0.8 0.8 2 0.2 1.1 0.2 2.4v22.3h8.9v-22.9q-0.1-2.7-0.9-4.8-0.8-2.2-2.2-3.9z"/>
                          <path id="&lt;Path&gt;" class="s1" d="m332.3 411.8q-1.5-1.2-3.6-2-2-0.8-4.3-1.4l-3.1-0.8q-0.6-0.1-1.4-0.3-0.8-0.2-1.5-0.5-0.7-0.3-1.2-0.8-0.5-0.4-0.5-1.1 0-1.2 1.1-1.9 1.1-0.8 3.2-0.8 1.1 0.1 2.1 0.2 0.9 0.1 1.9 0.4 0.9 0.2 1.9 0.8 1 0.5 2.1 1.3l5.8-5.3q-1.8-1.4-3.5-2.4-1.7-1-3.3-1.6-1.7-0.7-3.4-0.9-1.7-0.3-3.6-0.3-3.2 0-5.7 0.9-2.4 0.8-4.1 2.3-1.6 1.5-2.4 3.4-0.9 2-0.9 4.3 0 2.3 0.8 3.9 0.8 1.7 2.4 2.9 1.5 1.2 3.7 2 2.1 0.8 4.9 1.4l2.8 0.6q0.7 0.2 1.5 0.4 0.7 0.3 1.3 0.7 0.6 0.4 1 0.9 0.4 0.6 0.4 1.3 0 0.7-0.3 1.3-0.3 0.6-1 1.1-0.6 0.5-1.7 0.8-1.1 0.3-2.8 0.3-1.5 0-2.7-0.3-1.2-0.2-2.4-0.7-1.1-0.5-2.1-1.4-1-0.8-2.1-1.9l-5.5 5.9q1.6 1.6 3.2 2.8 1.6 1.2 3.4 2 1.8 0.8 3.9 1.2 2 0.3 4.5 0.3 3.7 0 6.4-0.9 2.7-1 4.5-2.6 1.9-1.5 2.8-3.6 0.9-2.1 0.9-4.3 0-2.6-0.9-4.4-0.9-1.9-2.5-3.2z"/>
                          <path id="&lt;Path&gt;" class="s1" d="m321.7 377.8q-0.9 0.1-1.7 0.5-0.9 0.4-1.6 1.1-0.7 0.7-1.2 1.8-0.6 1.1-0.9 2.8-0.3 1.6-0.3 3.9h7.5q0-1.5 0.1-2.3 0.1-0.8 0.5-0.8h12v-7.1h-12.6q-0.9 0-1.8 0.1z"/>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <div class="font-semibold text-3xl tracking-tight">ยินดีต้อนรับ</div>
              <div class="text-gray-500">เข้าสู่ระบบด้วยรหัสนิสิตและเลขประจำตัวประชาชน</div>
            </div>
            <div class="p-6 pt-0">
              <form id="login-form">
                <div class="space-y-6">
                  <div class="space-y-6">
                    <div class="space-y-2">
                      <label for="student-id" class="font-medium">รหัสนิสิต</label>
                      <input type="text" id="student-id" required maxlength="10" placeholder="รหัสนิสิต" class="w-full h-9 px-3 py-1 text-base border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500">
                    </div>
                    <div class="space-y-2">
                      <label for="idc" class="font-medium">เลขประจำตัวประชาชน</label>
                      <div class="relative">
                        <input type="password" id="idc" required maxlength="13" placeholder="เลขประจำตัวประชาชน" class="w-full h-9 px-3 py-1 text-base border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500">
                        <button type="button" id="switch-idc" class="bg-transparent p-0 m-0 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground absolute bottom-1 right-1 h-7 w-7" data-id="5">
                          <svg data-id="6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 stroke-current text-gray-800"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path><line x1="2" x2="22" y1="2" y2="22"></line></svg>
                        </button>
                      </div>
                    </div>
                    <label class="flex items-center space-x-2">
                      <input type="checkbox" id="remember-me" checked class="h-4 w-4 shrink-0 rounded-sm border border-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                      <span class="font-medium leading-none cursor-pointer">จำฉันไว้</span>
                    </label>
                    <div style="margin-top: 0; display: none;" id="remove-remember-me-container">
                      <span class="font-medium leading-none underline cursor-pointer hover:text-red-500" id="remove-remember-me">ลบข้อมูลของฉัน</span>
                    </div>
                    <button type="submit" id="login-button" class="w-full h-9 px-4 py-2 inline-flex items-center justify-center font-medium rounded-md bg-green-600 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 shadow">
                      เข้าสู่ระบบ
                    </button>
                    <div class="text-xs text-right text-gray-500">Made with ❤️ by <a href="https://github.com/c095c095" target="_blank">Sonsiwawong Suklert</a></div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

document.body.replaceWith(document.createElement('body'));
document.body.appendChild(container);
container.appendChild(newBody);

const encryptedIdc = localStorage.getItem('kuplus_idc');
const encryptedStudentId = localStorage.getItem('kuplus_studentId');

if (encryptedIdc && encryptedStudentId) {
  const key = 'weloveroblox';
  const idc = decrypt(encryptedIdc, key);
  const studentId = decrypt(encryptedStudentId, key);

  document.getElementById('idc').value = idc;
  document.getElementById('student-id').value = studentId;

  document.getElementById('remove-remember-me-container').style.display = 'block';
  document.getElementById('remove-remember-me').addEventListener('click', function () {
    localStorage.removeItem('kuplus_idc');
    localStorage.removeItem('kuplus_studentId');

    document.getElementById('idc').value = '';
    document.getElementById('student-id').value = '';
    document.getElementById('remove-remember-me-container').style.display = 'none';
  });
}

document.getElementById('idc').addEventListener('input', function (e) {
  e.target.value = e.target.value.replace(/[^0-9]/g, '');
});

document.getElementById('switch-idc').addEventListener('click', function (e) {
  const idc = document.getElementById('idc');
  const type = idc.getAttribute('type');
  if (type === 'password') {
    idc.setAttribute('type', 'text');
  } else {
    idc.setAttribute('type', 'password');
  }
});

document.getElementById('student-id').addEventListener('input', function (e) {
  e.target.value = e.target.value.replace(/[^0-9]/g, '');
});

document.getElementById('login-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const idc = document.getElementById('idc').value;
  const studentId = document.getElementById('student-id').value;
  const rememberMe = document.getElementById('remember-me').checked;

  if (idc == '' || studentId == '') {
    return;
  }

  const data = {
    uname: idc,
    psw: studentId,
  };

  if (rememberMe) {
    data.remember = 'on';
  }

  fetch('https://sw.sa.ku.ac.th/Fha/index.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
      'Cache-Control': 'max-age=0',
      'Sec-Fetch-Dest': 'document',
      'Sec-Fetch-Mode': 'navigate',
      'Sec-Fetch-User': '?1',
      'Upgrade-Insecure-Requests': '1',
    },
    body: new URLSearchParams(data),
  }).then((response) => {
    if ((response.url?.includes('user/index.php')) && rememberMe) {
      const key = 'weloveroblox';
      const encryptedIdc = encrypt(idc, key);
      const encryptedStudentId = encrypt(studentId, key);
      localStorage.setItem('kuplus_idc', encryptedIdc);
      localStorage.setItem('kuplus_studentId', encryptedStudentId);
    }
    
    if (response.redirected) {
      window.location.href = response.url;
    }
  });
});

// switch between new and old body
let currentStatus = 'new';

const switchContainer = document.createElement('div');
switchContainer.classList.add('fixed', 'bottom-0', 'right-0', 'p-4', 'z-50');

const switchButton = document.createElement('button');
switchButton.classList.add('bg-green-500', 'hover:bg-green-700', 'text-white', 'font-bold', 'py-2', 'px-4', 'rounded');
switchButton.innerHTML = 'สลับกลับไปใช้ของเก่า';

switchButton.addEventListener('click', () => {
  container.innerHTML = '';
  if (currentStatus === 'new') {
    container.appendChild(oldBody);
    switchButton.innerHTML = 'สลับกลับไปใช้ของใหม่';
    currentStatus = 'old';
  } else {
    container.appendChild(newBody);
    switchButton.innerHTML = 'สลับกลับไปใช้ของเก่า';
    currentStatus = 'new';
  }
});

switchContainer.appendChild(switchButton);
document.body.appendChild(switchContainer);
