import Episode from './components/Episode.vue'
import YearGraph from './components/YearGraph.vue'
import MonthlyGraph from './components/MonthlyGraph.vue'
import TopTen from './components/TopTen.vue'
import FeedStats from './components/FeedStats.vue'
import Wizard from './components/Wizard.vue'
import PodcasterList from './components/List.vue'

panel.plugin('mauricerenck/podcaster', {
    components: {
        'PodcasterList': PodcasterList
    },
    sections: {
        'podcasterEpisodeStats': Episode,
        'podcasterYearlyGraph': YearGraph,
        'podcasterMonthlyGraph': MonthlyGraph,
        'podcasterTopTen': TopTen,
        'podcasterFeedStats': FeedStats,
        'podcasterWizard': Wizard
    },

});