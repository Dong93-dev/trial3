let sayName = () => {
  return 1;
};


describe("sayName", ()=> {
  test("return times sayName is called", ()=>{
    const sayNameMock = jest.fn(sayName);
    console.log(sayNameMock());
    console.log(sayNameMock());
    const actual = sayNameMock.mock.calls.length;
    const expected = 2;
    expect(actual).toBe(expected);

  })
})

