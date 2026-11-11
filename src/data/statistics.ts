export const statistics = [
  { id: "students", value: null },
  { id: "experience", value: null },
  { id: "teachers", value: null },
  { id: "satisfaction", value: null },
] as const satisfies { id: string; value: number | null }[];
