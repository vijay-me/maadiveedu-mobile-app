const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

export default {
  primary:'#009956',
  secondary:'#E5F8E5',
  text:'#101820',
  'text-50':'#10182080',
  'text-70':'#101820B2',
  disabled:'#D9D9D9',
  error:'#F7504F',
  link:'#003FE0',
  warning:'#FFE9DE',
  yellow:'#FFA620',
  white:'#fff',
  black:'#000',
  info:'#009956',
  success:'#009956',
  // warning:'#FFA620',
  'primary-gradient': 'linear-gradient(93.5deg, #004D2B 0%, #009956 100%)', // Added gradient color
  'badge-gradient': 'linear-gradient(180deg, #4A00E0 0%, #8E2DE2 100%)', // Added gradient color
  light: {
    text: '#000',
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
};
