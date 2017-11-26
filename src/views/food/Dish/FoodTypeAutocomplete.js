import Autocomplete from 'react-native-autocomplete-input';
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import {FoodTypesService} from "../../../service/FoodTypesService";

class AutocompleteExample extends Component {

    static renderFoodType(foodType) {
        const {name, kcal} = foodType;
        return (
            <View>
                <Text style={styles.titleText}>{name}</Text>
                <Text style={styles.directorText}>{kcal} kcal</Text>
            </View>
        );
    }

    constructor(props) {
        super(props);
        this.state = {
            query: ''
        };
    }

    render() {
        const {query} = this.state;
        const foodTypes = query ? FoodTypesService.findFoodTypes(query, 10) : [];
        const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();

        return (
            <View style={styles.container}>
                <Autocomplete
                    autoCapitalize="none"
                    autoCorrect={false}
                    containerStyle={styles.autocompleteContainer}
                    data={foodTypes.length === 1 && comp(query, foodTypes[0].name) ? [] : foodTypes}
                    defaultValue={query}
                    onChangeText={text => this.setState({query: text})}
                    placeholder="Enter food"
                    renderItem={({name}) => (
                        <TouchableOpacity onPress={() => this.setState({query: name})}>
                            <Text style={styles.itemText}>
                                {name}
                            </Text>
                        </TouchableOpacity>
                    )}
                />
                <View style={styles.descriptionContainer}>
                    {foodTypes.length > 0 ? (
                        AutocompleteExample.renderFoodType(foodTypes[0])
                    ) : (
                        <Text style={styles.infoText}>
                            Enter food
                        </Text>
                    )}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 25,
        width: '100%'
    },
    autocompleteContainer: {
        marginLeft: 10,
        marginRight: 10
    },
    itemText: {
        fontSize: 15,
        margin: 2
    },
    descriptionContainer: {
        backgroundColor: '#F5FCFF',
        marginTop: 8
    },
    infoText: {
        textAlign: 'center'
    },
    titleText: {
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 10,
        marginTop: 10,
        textAlign: 'center'
    },
    directorText: {
        color: 'grey',
        fontSize: 12,
        marginBottom: 10,
        textAlign: 'center'
    },
    openingText: {
        textAlign: 'center'
    }
});

export default AutocompleteExample;
