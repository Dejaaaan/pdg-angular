export class Event {
  constructor(
    public id,
    public event_type_id,
    public event_name,
    public event_description,
    public event_status,
    public event_image,
    public event_start,
    public event_end,
    public event_date,
    public event_address,
    public event_city_id,
    public event_country_id,
    public created_at,
    public updated_at
  ) {}
}
