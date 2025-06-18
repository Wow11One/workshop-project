export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'greet' : IDL.Func([IDL.Text, IDL.Text], [IDL.Text], ['query']),
    'number' : IDL.Func([], [IDL.Nat32], ['query']),
    'set_greeting' : IDL.Func([IDL.Text], [], []),
  });
};
export const init = ({ IDL }) => { return []; };
