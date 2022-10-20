# COLORS API: COLOR SCHEME GENERATOR

https://www.thecolorapi.com

Allow users to pick seed color using color picker
Allow users to select color scheme to generate from
Allow user to click generate & display scheme from seed

## STEPS

### LAYOUT

- Create file and folder structure in code editor
- Create elements for layout in html
- Create css reset styles and minimal css for layout comprehension

### INTERACTION

- Make sure the color picker works and that the color value can be received
- Make sure the color scheme selection works and the value can be received
- Make sure the generate scheme button works and that the values of the picks and scheme can be accessed with event listener

### DATA

- Attach the value of the color picker to a GET request: this will be the seed color that the scheme will be generated from: Confirm that the response contains the same seed color as selected
- Attach the value of the scheme selected to the GET request so that the seed scheme can be correctly generated: Confirm that the response was generated based on the seed color & scheme selected

### DISPLAY

- On initial page view (having selected nothing) the color picker should have a default value & a default scheme should be auto generated from that: The same display will be present upon page refresh (unless storing the previous values in local storage?)

### CHANGE DISPLAY

- On click of button grab the seed color value & the scheme value at that time (after user selection) and call the fetch request passing in the new values which will then update the display

### GOALS

- functionality
  - pick color
  - pick scheme
  - generate & display scheme based on color & scheme
- responsive design
- design principles applied
  - alignment
  - balance & flow
  - white space
  - visual hierarchy
  - color
  - constrast
  - consistency
  - modularity

### STRETCH GOAL

- click color to copy hex to clipboard
- save current color and scheme to local storage to regenerate on refresh

#### PROCESS

- visit api: https://www.thecolorapi.com

  ##### TO GET A COLOR

  - must pass in a color(hex string value without the #)
  - endpoints availible in json/html/svg
  - e.g: https://www.thecolorapi.com/id?hex=0047AB&rgb=0,71,171&hsl=215,100%,34%&cmyk=100,58,0,33&format=html
  - simplify dynamic example for json: `https://www.thecolorapi.com/id?hex=${hex}format=json`

  ##### POTENTIAL DATA POINTS REQUIRED

  - returns object:
    - hex.value = "#24B1E0"
    - hex.clean = "24B1E0"
    - hex.name = "Cerulean"

  ##### TO GET A COLOR SCHEME

  - possible schemes:
    - monochrome, monochrome-dark, monochrome-light, analogic, complement, analogic-complement, triad and quad
  - example GET request:

    - https://www.thecolorapi.com/scheme?hex=0047AB&rgb=0,71,171&hsl=215,100%,34%&cmyk=100,58,0,33&format=html&mode=analogic&count=6

  - simplify dynamic example for json:

  - https://www.thecolorapi.com/scheme?hex=0047AB&format=json&mode=analogic&count=6

  - https://www.thecolorapi.com/scheme?hex=${hex}&format=json&mode=${scheme}&count=6

  ##### POTENTIAL DATA POINTS REQUIRED

  - returns object:
    - obj.mode = "analogic"
    - obj.colors[0].hex.value = "#04429A"
    - obj.colors[0].hex.clean = "04429A"
    - obj.colors[0].name.value = "Congress Blue"

  ##### DEPLOYED URL

  - https://onessr.github.io/colorsAPI/

  ###### NEXT STEPS

  - Work on copy to clipboard
    - when hex is clicked the UI should provide feedback that the color was copied to the clipboard
    - indicator should either pop up temporarily or be static?
  - The Carat in the scheme selection drop down dissapears when the project is deployed but not when run in local host
    - check why this is, is there a better way to make it work?
