import { ThemePalette } from "@angular/material/core";

export interface Check {
    name: string;
    completed: boolean;
    color: ThemePalette;
    subtasks?: Check[];
  }