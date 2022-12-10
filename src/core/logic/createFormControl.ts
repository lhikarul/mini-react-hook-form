function set(object, path, value) {
  object[path] = value;

  return object;
}

function get(obj, path, defaultValue?: unknown) {
  return obj[path];
}

function getFieldValue(_f) {
  const ref = _f.ref;

  return ref.value;
}

export function createFormControl(props, flushRootRender) {
  let _fields = {};

  let _names = {
    mount: new Set(),
    unMount: new Set(),
    array: new Set(),
    watch: new Set(),
  };

  const onChange = async (event) => {
    console.log("onChange");
    // const target = event.target;
    // let name = target.name;
    // const field = get(_fields, name);
    // const getCurrentFieldValue = () =>
    //   target.type ? getFieldValue(field._f) : "";
  };

  const register = (name, options = {}) => {
    let field: any;

    set(_fields, name, {
      ...(field || {}),
      _f: {
        ...(field && field.f ? field.f : { ref: { name } }),
        name,
        mount: true,
        ...options,
      },
    });
    _names.mount.add(name);

    return {
      name,
      onChange,
      onBlur: onChange,
      ref: (ref: HTMLInputElement | null): void => {
        if (ref) {
          console.log("ref ", ref);
        } else {
          console.log("no ref");
        }
      },
    };
  };

  return {
    constrol: {},
    register,
  };
}
