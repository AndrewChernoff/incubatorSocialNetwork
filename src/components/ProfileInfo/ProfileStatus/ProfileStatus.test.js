import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("Status of props should be in state", () => {
        const instance = create(<ProfileStatus status='it-kamasutra' />);
        expect(instance.state.status).toBe('it-kamasutra');
    });
});
