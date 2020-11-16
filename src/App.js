import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";
import Sidebar from "./components/Sidebar";
import { Home } from "./Home";
import {
  MyExample,
  GridTemplateColumnRow,
  GridTemplateAreasGridArea,
  GridJustifySelf,
  AlignSelf,
  GridGap,
  PlaceSelf,
  JustifyItems,
  AlignItems,
  PlaceItems,
  JustifyContentAlignContent,
  PlaceContent,
  GridAuto,
  AutoFlow,
  Grid,
} from "./pages";

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />

        <Sidebar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/myexample" component={MyExample} />
          <Route
            path="/gridtemplatecolumnrow"
            component={GridTemplateColumnRow}
          />
          <Route
            path="/gridtemplateareasgridarea"
            component={GridTemplateAreasGridArea}
          />
          <Route path="/gridjustifyself" component={GridJustifySelf} />
          <Route path="/alignself" component={AlignSelf} />
          <Route path="/gridgap" component={GridGap} />
          <Route path="/placeself" component={PlaceSelf} />
          <Route path="/justifyitems" component={JustifyItems} />
          <Route path="/alignitems" component={AlignItems} />
          <Route path="/placeitems" component={PlaceItems} />
          <Route
            path="/justifycontentaligncontent"
            component={JustifyContentAlignContent}
          />
          <Route path="/placecontent" component={PlaceContent} />
          <Route path="/gridauto" component={GridAuto} />
          <Route path="/autoflow" component={AutoFlow} />
          <Route path="/grid" component={Grid} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
