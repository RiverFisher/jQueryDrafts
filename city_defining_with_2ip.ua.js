<script type="text/javascript">
        {% if cityName is null %}
        let url = "http://api.2ip.ua/geo.json?ip=" + "{{ userIp }}";
        $.get(
            url, function( data ) {
                $( document ).ready( function() {
                    let match = $('#court_filter_city option').filter( function() {
                        return $(this).text().trim() === data.city_rus;
                    });

                    if (match.length == 0) {
                        match = $('#court_filter_city option').filter( function() {
                            return $(this).text().trim() === 'Санкт-Петербург';
                        });
                    }

                    $('#city-definition > p').text('Ваш город определён как ' + data.city_rus +
                        '. В случае несоответствия Вы можете выбрать другой город из списка ниже.');

                    $(match).prop('selected', 'selected');
                });
            }
        );
        {% else %}
        $( document ).ready( function() {
            let match = $('#court_filter_city option').filter( function() {
                return $(this).text().trim() === "{{ cityName }}";
            });

            $('#city-definition > p').text('Ваш город определён как {{ cityName }}. ' +
                'В случае несоответствия Вы можете выбрать другой город из списка ниже.');

            $(match).prop('selected', 'selected');
        });
        {% endif %}
    </script>
