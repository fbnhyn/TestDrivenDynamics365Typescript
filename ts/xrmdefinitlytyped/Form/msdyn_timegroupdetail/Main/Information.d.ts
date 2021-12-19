declare namespace Form.msdyn_timegroupdetail.Main {
  namespace Information {
    namespace Tabs {
      interface NotesTab extends Xrm.SectionCollectionBase {
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface b9c0a5377a9041409d0a0fc166dde719 extends Xrm.SectionCollectionBase {
        get(name: "{983fec4f-2163-4ea9-b2d8-ef05698ef6d8}"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_endtime"): Xrm.DateAttribute;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_starttime"): Xrm.DateAttribute;
      get(name: "msdyn_timegroupid"): Xrm.LookupAttribute<"msdyn_timegroup">;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "WebResource_msdyn_endtime"): Xrm.WebResourceControl;
      get(name: "WebResource_msdyn_starttime"): Xrm.WebResourceControl;
      get(name: "msdyn_endtime"): Xrm.DateControl;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_starttime"): Xrm.DateControl;
      get(name: "msdyn_timegroupid"): Xrm.LookupControl<"msdyn_timegroup">;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "NotesTab"): Xrm.PageTab<Tabs.NotesTab>;
      get(name: "{b9c0a537-7a90-4140-9d0a-0fc166dde719}"): Xrm.PageTab<Tabs.b9c0a5377a9041409d0a0fc166dde719>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "msdyn_endtime"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_starttime"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_timegroupid"): Xrm.LookupAttribute<"msdyn_timegroup">;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "WebResource_msdyn_endtime"): Xrm.WebResourceControl;
    getControl(controlName: "WebResource_msdyn_starttime"): Xrm.WebResourceControl;
    getControl(controlName: "msdyn_endtime"): Xrm.DateControl;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_starttime"): Xrm.DateControl;
    getControl(controlName: "msdyn_timegroupid"): Xrm.LookupControl<"msdyn_timegroup">;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
