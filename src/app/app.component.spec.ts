import { AppComponent } from "./app.component";

describe("AppComponent", () => {
  let fixture:AppComponent;

  beforeEach(() => {
      fixture = new AppComponent;
    });

  it("should create", () => {
    expect(fixture).toBeTruthy();
  });

  // test("title should be Loan Manager", () => {
  //   expect(fixture.title).toBe("frontend");
  // })



});
