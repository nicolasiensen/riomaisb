module ApplicationHelper
  def toggle_button target_id, options = {}
    raw (
      "
        <a
          class='#{options[:class] || 'black regular btn btn-primary bg-white'}'
          id='#{target_id}-btn'
          onClick='
            console.log(event)
            document.getElementById(\"#{target_id}\").className = \"\";
            document.getElementById(\"#{target_id}-btn\").className = \"hide\";
            return false;
          '>
            Continuar lendo
            <i class='fa fa-chevron-down ml1' aria-hidden='true'></i>
        </a>
      "
    )
  end
end
