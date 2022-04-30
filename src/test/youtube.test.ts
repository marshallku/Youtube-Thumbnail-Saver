import { getIdFromUri } from "../ts/utils/youtube";

describe("Get ID from URI", () => {
    it("Get ID from video", () => {
        expect(
            getIdFromUri("https://www.youtube.com/watch?v=H69tJmsgd9I")
        ).toBe("H69tJmsgd9I");
        expect(getIdFromUri("https://youtu.be/H69tJmsgd9I")).toBe(
            "H69tJmsgd9I"
        );
    });
    it("Get ID from embed", () => {
        expect(getIdFromUri("https://www.youtube.com/embed/H69tJmsgd9I")).toBe(
            "H69tJmsgd9I"
        );
    });
    it("Get ID from shorts", () => {
        expect(getIdFromUri("https://www.youtube.com/shorts/9VtlV9ed0eg")).toBe(
            "9VtlV9ed0eg"
        );
    });
    it("Get ID from uri with query", () => {
        expect(
            getIdFromUri("https://www.youtube.com/watch?v=H69tJmsgd9I&t=0s")
        ).toBe("H69tJmsgd9I");
        expect(
            getIdFromUri(
                "https://www.youtube.com/embed/H69tJmsgd9I?controls=0&amp;start=7"
            )
        ).toBe("H69tJmsgd9I");
        expect(
            getIdFromUri("https://youtube.com/shorts/9VtlV9ed0eg?feature=share")
        ).toBe("9VtlV9ed0eg");
    });
});
