$(document).ready(function(){
  gantt.config.scale_unit = "day";
  gantt.config.date_scale = "%F %d";
  gantt.config.min_column_width = 50;

  gantt.config.scale_height = 54;

  gantt.config.subscales = [
    {unit:"hour", step:3, date:"%H:%i"}
  ];

  gantt.init("gantt_here");
  gantt.parse(demo_tasks);
});
