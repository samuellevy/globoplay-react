import data from "../../public/api/data.json";

describe("<Menu />", () => {
  test("should be a valid object", () => {
    expect(data).toBeInstanceOf(Object);
  });
  test("should have programs property", () => {
    expect(data).toHaveProperty("programs");
  });
  test("should have programs as array", () => {
    expect(data.programs).toBeInstanceOf(Array);
  });
  test("should have programs with a valid id", () => {
    const { programs } = data;
    const programsOk = programs.filter(
      (program) => typeof program.id == "number",
    );
    expect(programsOk.length === programs.length).toEqual(true);
  });
  test("should have determined fields on each program", () => {
    const { programs } = data;
    const programsOk = programs.filter(
      (program) =>
        program.id !== undefined &&
        program.title !== undefined &&
        program.description !== undefined &&
        program.thumbnail !== undefined &&
        program.cover !== undefined &&
        program.duration !== undefined,
    );
    expect(programsOk.length === programs.length).toEqual(true);
  });
});

export {};
