var r = document.querySelector(':root');

colorNames = ['--core-background', '--header-background', '--main-background'];
darkTheme = ['#16796F', '#ADC9C5', '#6CB0A8', '#10564F']
lightTheme = ['#16796F', '#7CB7AF', '#CADEDF', '#9CA89E']

function getColorVariable(name) {
    var rs = getComputedStyle(r);
    return rs.getPropertyValue(name);
}

function setColorVariable(name, color) {
    r.style.setProperty(name, color)
}

function setColorScheme(scheme) {
    switch(scheme){
      case 'dark':
        console.log('dark');
        setColorVariable(colorNames[0], darkTheme[3]);
        setColorVariable(colorNames[1], darkTheme[0]);
        setColorVariable(colorNames[2], darkTheme[2]);
        break;
      case 'light':
        console.log('light');
        setColorVariable(colorNames[0], lightTheme[3]);
        setColorVariable(colorNames[1], lightTheme[1]);
        setColorVariable(colorNames[2], lightTheme[2]);
        break;
      default:
        console.log('default');
        setColorVariable(colorNames[0], darkTheme[3]);
        setColorVariable(colorNames[1], darkTheme[0]);
        setColorVariable(colorNames[2], darkTheme[2]);
        break;
    }
  }
  
  function getPreferredColorScheme() {
    if (window.matchMedia) {
      if(window.matchMedia('(prefers-color-scheme: dark)').matches){
        return 'dark';
      } else {
        return 'light';
      }
    }
    return 'light';
  }
  
  function updateColorScheme(){
      setColorScheme(getPreferredColorScheme());
  }
  
  if(window.matchMedia){
    var colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    colorSchemeQuery.addEventListener('change', updateColorScheme);
  }
  
  updateColorScheme();