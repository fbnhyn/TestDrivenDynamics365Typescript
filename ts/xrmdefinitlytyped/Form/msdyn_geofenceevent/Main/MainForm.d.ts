declare namespace Form.msdyn_geofenceevent.Main {
  namespace MainForm {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_geofence"): Xrm.LookupAttribute<"msdyn_geofence">;
      get(name: "msdyn_geotrackedentity"): Xrm.Attribute<string>;
      get(name: "msdyn_geotrackedrecord"): Xrm.Attribute<string>;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "msdyn_geofence"): Xrm.LookupControl<"msdyn_geofence">;
      get(name: "msdyn_geotrackedentity"): Xrm.StringControl;
      get(name: "msdyn_geotrackedrecord"): Xrm.StringControl;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface MainForm extends Xrm.PageBase<MainForm.Attributes,MainForm.Tabs,MainForm.Controls> {
    getAttribute(attributeName: "msdyn_geofence"): Xrm.LookupAttribute<"msdyn_geofence">;
    getAttribute(attributeName: "msdyn_geotrackedentity"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_geotrackedrecord"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "msdyn_geofence"): Xrm.LookupControl<"msdyn_geofence">;
    getControl(controlName: "msdyn_geotrackedentity"): Xrm.StringControl;
    getControl(controlName: "msdyn_geotrackedrecord"): Xrm.StringControl;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
