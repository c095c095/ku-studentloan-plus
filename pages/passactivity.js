let currentStatus = 'new', scriptActivated = false;
const container = document.createElement('div');
const oldContent = getOldContent();
const newLayout = createLayout(oldContent.body);

activateNewLayout(container, newLayout);
createSwitcher(container, oldContent, newLayout);
injectMainContent(newLayout);

function createLayout(scrapeDOM) {
  const layout = document.createElement('div');
  layout.innerHTML = `
  <style>
    .hover\\:text-accent-foreground:hover {
      color: hsl(240 5.9% 10%);
    }
    .hover\\:bg-accent:hover {
      background-color: hsl(240 4.8% 95.9%);
    }
    .dropdown-button[aria-expanded="true"] svg.arrow {
      transform: rotate(180deg);
    }
    .dropdown-button[aria-expanded="true"].hover\\:text-accent-foreground {
      color: hsl(240 5.9% 10%);
    }
    .dropdown-button[aria-expanded="true"].hover\\:bg-accent {
      background-color: hsl(240 4.8% 95.9%);
    }
  </style>
  <div class="relative flex flex-col min-h-screen bg-gray-100">
    <div class="flex flex-1 flex-col">
      <header class="sticky top-0 z-10 w-full border-b bg-white bg-opacity-95 backdrop-filter backdrop-blur px-6 md:px-8">
        <div class="w-full max-w-6xl mx-auto">
          <div class="flex h-14 items-center">
            <div class="mr-4 hidden md:flex">
              <a class="mr-4 flex items-center space-x-2 lg:mr-6" href="index.php">
                <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 337 432" class="h-10 w-10">
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
              </a>
              <nav class="relative z-10 flex max-w-max flex-1 items-center justify-center">
                <div style="position: relative;">
                  <ul class="group flex flex-1 list-none items-center justify-center space-x-1">
                    <li>
                      <a class="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50" href="?page=pj">รายการโครงการ</a>
                    </li>
                    <li class="dropdown relative">
                      <button class="dropdown-button group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none">
                        บันทึกการกู้ยืม
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="arrow lucide lucide-chevron-down relative top-[1px] ml-1 h-3 w-3 transition duration-200" aria-hidden="true">
                          <path d="m6 9 6 6 6-6"></path>
                        </svg>
                      </button>
                      <ul class="dropdown-menu hidden absolute left-0 top-full bg-white bg-opacity-95 backdrop-filter backdrop-blur border shadow-md py-2 space-y-2 w-48 z-20">
                        <li class="px-1"><a href="?page=add" class="block px-4 py-2 text-sm rounded hover:bg-accent hover:text-accent-foreground">กรอกข้อมูล</a></li>
                        <li class="px-1"><a href="?page=rck" class="block px-4 py-2 text-sm rounded hover:bg-accent hover:text-accent-foreground">ตรวจเช็คการกู้</a></li>
                      </ul>
                    </li>
                    <li class="dropdown relative">
                      <button class="dropdown-button group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none">
                        บันทึกชั่วโมงกิจกรรม
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="arrow lucide lucide-chevron-down relative top-[1px] ml-1 h-3 w-3 transition duration-200" aria-hidden="true">
                          <path d="m6 9 6 6 6-6"></path>
                        </svg>
                      </button>
                      <ul class="dropdown-menu hidden absolute left-0 top-full bg-white bg-opacity-95 backdrop-filter backdrop-blur border shadow-md py-2 space-y-2 w-48 z-20">
                        <li class="px-1"><a href="?page=uploadfile" class="block px-4 py-2 text-sm rounded hover:bg-accent hover:text-accent-foreground">กรอกข้อมูล</a></li>
                        <li class="px-1"><a href="?page=listactivity" class="block px-4 py-2 text-sm rounded hover:bg-accent hover:text-accent-foreground">ตรวจสอบ</a></li>
                        <li class="px-1"><a href="?page=showactivity" class="block px-4 py-2 text-sm rounded hover:bg-accent hover:text-accent-foreground">แสดงรายการ</a></li>
                        <li class="px-1"><a href="?page=passactivity" class="block px-4 py-2 text-sm rounded hover:bg-accent hover:text-accent-foreground">สรุปกิจกรรมที่ผ่าน</a></li>
                      </ul>
                    </li>
                    <li class="dropdown relative">
                      <button class="dropdown-button group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none">
                        พิมพ์เอกสารกิจกรรม
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="arrow lucide lucide-chevron-down relative top-[1px] ml-1 h-3 w-3 transition duration-200" aria-hidden="true">
                          <path d="m6 9 6 6 6-6"></path>
                        </svg>
                      </button>
                      <ul id="activity-dropdown" class="dropdown-menu hidden absolute left-0 top-full bg-white bg-opacity-95 backdrop-filter backdrop-blur border shadow-md py-2 space-y-2 w-48 z-20"></ul>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <div class="flex flex-1 items-center justify-between md:justify-end">
              <div class="w-full flex-1 md:w-auto"></div>
              <nav class="flex items-center space-x-1">
                <ul class="group flex flex-1 list-none items-center justify-center space-x-1">
                  <li class="dropdown relative">
                    <button class="dropdown-button group inline-flex whitespace-nowrap h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none">
                      <svg class="h-full pr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192" fill="none"><path fill="#000000" fill-rule="evenodd" d="M55.087 40H83c13.807 0 25 11.193 25 25S96.807 90 83 90H52c-.335 0-.668-.007-1-.02V158a6 6 0 0 0 6 6h9a6 6 0 0 0 6-6v-18a6 6 0 0 1 6-6h24a6 6 0 0 1 6 6v18a6 6 0 0 0 6 6h9a6 6 0 0 0 6-6V54c0-14.36-11.641-26-26-26H77c-9.205 0-17.292 4.783-21.913 12ZM39 86.358C31.804 81.97 27 74.046 27 65c0-9.746 5.576-18.189 13.712-22.313C45.528 27.225 59.952 16 77 16h26c16.043 0 29.764 9.942 35.338 24H147c9.941 0 18 8.059 18 18v65c0 9.941-8.059 18-18 18h-6v17c0 9.941-8.059 18-18 18h-9c-9.941 0-18-8.059-18-18v-12H84v12c0 9.941-8.059 18-18 18h-9c-9.941 0-18-8.059-18-18V86.358ZM141 129h6a6 6 0 0 0 6-6V58a6 6 0 0 0-6-6h-6.052c.035.662.052 1.33.052 2v75ZM52 52c-7.18 0-13 5.82-13 13s5.82 13 13 13h31c7.18 0 13-5.82 13-13s-5.82-13-13-13H52Z" clip-rule="evenodd"/></svg>
                      <span class="hidden lg:inline-block">ศรศิววงศ์ สุขเลิศ</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="arrow lucide lucide-chevron-down relative top-[1px] ml-1 h-3 w-3 transition duration-200" aria-hidden="true"><path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </button>
                    <ul class="dropdown-menu hidden absolute left-0 top-full bg-white bg-opacity-95 backdrop-filter backdrop-blur border shadow-md py-2 space-y-2 w-48 z-20">
                      <li class="px-1"><a href="?page=datauser" class="block px-4 py-2 text-sm rounded hover:bg-accent hover:text-accent-foreground">ข้อมูลผู้ใช้งาน</a></li>
                      <li class="px-1"><a href="?doLogout=true" class="block px-4 py-2 text-sm rounded hover:bg-accent hover:text-accent-foreground">ออกจากระบบ</a></li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <div id="main-content"></div>
    </div>
  </div>
  `;

  const activityMenu = Array.from(scrapeDOM.querySelectorAll('.dropdown .dropbtn'))
    .find(el => el.textContent.trim() === 'พิมพ์เอกสารกิจกรรม')
    ?.parentElement.querySelector('.dropdown-content');

  const activities = Array.from(activityMenu.querySelectorAll('a')).map(link => ({
    text: link.textContent.trim(),
    onclick: link.getAttribute('onclick')
  }));

  const activityDropdown = layout.querySelector('#activity-dropdown');
  activities.forEach(({ text, onclick }) => {
    const item = document.createElement('li');
    const link = document.createElement('a');
    item.classList.add('px-1');
    link.classList.add('block', 'px-4', 'py-2', 'text-sm', 'rounded', 'hover:bg-accent', 'hover:text-accent-foreground', 'cursor-pointer');
    link.textContent = text;
    link.onclick = onclick;
    item.appendChild(link);
    activityDropdown.appendChild(item);
  });

  return layout;
}

function createSwitcher(container , oldContent, newLayout) {
  const switchContainer = document.createElement('div');
  switchContainer.classList.add('fixed', 'bottom-0', 'right-0', 'p-4', 'z-50');
  
  const switchButton = document.createElement('button');
  switchButton.classList.add('bg-green-500', 'hover:bg-green-700', 'text-white', 'font-bold', 'py-2', 'px-4', 'rounded');
  switchButton.innerHTML = 'สลับกลับไปใช้ของเก่า';
  
  switchButton.addEventListener('click', () => {
    container.innerHTML = '';
    if (currentStatus === 'new') {
      document.head.appendChild(oldContent.style);
      container.appendChild(oldContent.body);
      switchButton.innerHTML = 'สลับกลับไปใช้ของใหม่';
      currentStatus = 'old';
    } else {
      document.head.querySelectorAll('style').forEach(style => {
        style.remove();
      });
      container.appendChild(newLayout);
      switchButton.innerHTML = 'สลับกลับไปใช้ของเก่า';
      currentStatus = 'new';
    }
  });
  
  switchContainer.appendChild(switchButton);
  document.body.appendChild(switchContainer);
}

function getOldContent() {
  const body = document.body;
  const style = document.head.querySelector('style');

  return { body, style };
}

function activateNewLayout(container, layout) {
  document.head.querySelectorAll('style').forEach(style => {
    style.remove();
  });
  document.body.replaceWith(document.createElement('body'));
  document.body.appendChild(container);
  container.appendChild(layout);

  activateLayoutScript();
}

function activateLayoutScript() {
  if (scriptActivated) return;
  scriptActivated = true;

  document.querySelectorAll('.dropdown').forEach(dropdown => {
    dropdown.dataset.locked = "false";
    const button = dropdown.querySelector('.dropdown-button');
    const menu = dropdown.querySelector('.dropdown-menu');
  
    dropdown.addEventListener('mouseenter', () => {
      document.querySelectorAll('.dropdown').forEach(other => {
        if (other !== dropdown && other.dataset.locked === "true") {
          other.dataset.locked = "false";
          const otherMenu = other.querySelector('.dropdown-menu');
          const otherButton = other.querySelector('.dropdown-button');
          otherMenu.classList.add('hidden');
          otherButton.setAttribute('aria-expanded', 'false');
        }
      });
  
      if (dropdown.dataset.locked === "false") {
        menu.classList.remove('hidden');
        button.setAttribute('aria-expanded', 'true');
      }
    });
  
    dropdown.addEventListener('mouseleave', () => {
      if (dropdown.dataset.locked === "false") {
        menu.classList.add('hidden');
        button.setAttribute('aria-expanded', 'false');
      }
    });
  
    button.addEventListener('click', (event) => {
      event.stopPropagation();
      if (dropdown.dataset.locked === "true") {
        dropdown.dataset.locked = "false";
        menu.classList.add('hidden');
        button.setAttribute('aria-expanded', 'false');
      } else {
        document.querySelectorAll('.dropdown').forEach(other => {
          if (other !== dropdown && other.dataset.locked === "true") {
            other.dataset.locked = "false";
            const otherButton = other.querySelector('.dropdown-button');
            const otherMenu = other.querySelector('.dropdown-menu');
            otherMenu.classList.add('hidden');
            otherButton.setAttribute('aria-expanded', 'false');
          }
        });
        dropdown.dataset.locked = "true";
        menu.classList.remove('hidden');
        button.setAttribute('aria-expanded', 'true');
      }
    });
  });
  
  document.addEventListener('click', () => {
    document.querySelectorAll('.dropdown').forEach(dropdown => {
      const button = dropdown.querySelector('.dropdown-button');
      const menu = dropdown.querySelector('.dropdown-menu');
  
      if (!menu) return;
  
      dropdown.dataset.locked = "false";
      menu.classList.add('hidden');
      button.setAttribute('aria-expanded', 'false');
    });
  });
}

function injectMainContent(layout) {
  const mainContent = document.querySelector('#main-content');
  mainContent.innerHTML = `
    <div class="container mx-auto p-4">
      <h1 class="text-3xl font-bold text-center mb-4">รายการกิจกรรมที่ผ่าน</h1>
    </div>
  `;
}