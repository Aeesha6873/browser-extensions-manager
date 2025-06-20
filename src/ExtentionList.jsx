import React from "react";
import Card from "./Card";
import Devlens from "./images/logo-devlens.svg";
import StyleSpy from "./images/logo-style-spy.svg";
import SpeedBoost from "./images/logo-speed-boost.svg";
import JSONWizard from "./images/logo-json-wizard.svg";
import TabMaster from "./images/logo-tab-master-pro.svg";
import ViewportBuddy from "./images/logo-viewport-buddy.svg";
import Markup from "./images/logo-markup-notes.svg";
import GridGuides from "./images/logo-grid-guides.svg";
import Palette from "./images/logo-palette-picker.svg";
import LinkChecker from "./images/logo-link-checker.svg";
import DOM from "./images/logo-dom-snapshot.svg";
import ConsolePlus from "./images/logo-console-plus.svg";

export default function ExtentionList() {
  return (
    <div className="card-container">
      <Card
        img={Devlens}
        title="DevLens"
        paragraph="Quikly inspect page layouts and visualize element boundaries."></Card>

      <Card
        img={StyleSpy}
        title="StyleSpy"
        paragraph="Instantly analyze and copy CSS from any webpage element."></Card>

      <Card
        img={SpeedBoost}
        title="SpeedBoost"
        paragraph="Optimizes browser resource usage to accelerate page loading."></Card>
      <Card
        img={JSONWizard}
        title="JSONWizard"
        paragraph="Formats, validates, and prettifies JSON responsses in-brousers."></Card>
      <Card
        img={TabMaster}
        title="TabMaster Pro"
        paragraph="Organizes browser tabs into groups and sessions."></Card>

      <Card
        img={ViewportBuddy}
        title="ViewportBuddy"
        paragraph="Simulates various screen resolution directly within the browser."></Card>

      <Card
        img={Markup}
        title="Markup Notes"
        paragraph="Enables annotation and notes directly onto webpages for collaborative debugging."></Card>
      <Card
        img={GridGuides}
        title="GridGuides"
        paragraph="Overlay customizable grids and alignment guides on any webpages."></Card>
      <Card
        img={Palette}
        title="Palette Picker"
        paragraph="Instantly extracts color palettes from any webpage."></Card>
      <Card
        img={LinkChecker}
        title="LinkChecker"
        paragraph=" Scans and highlights broken links on any page."></Card>
      <Card
        img={DOM}
        title="DOM Snapshot"
        paragraph=" Capture and export DOM structures quickly"></Card>
      <Card
        img={ConsolePlus}
        title="ConsolePlus"
        paragraph="Enhanced developer console with advanced filtering and logging."></Card>
    </div>
  );
}
