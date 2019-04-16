export function debounce(ms) {
  let timeout = ms;

  return function(target, key, desc) {
    let original = desc.value;
    let timer = null;
    desc.value = function(...args) {
      if (timer) clearTimeout(timer);

      timer = setTimeout(() => {
        original.apply(this, args);
      }, timeout);
    };
  };
}
