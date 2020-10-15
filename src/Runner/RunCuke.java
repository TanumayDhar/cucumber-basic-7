package Runner;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)

@CucumberOptions(features={"src/feature"},
glue={"Steps"},
monochrome=true,
tags= {"@Functional"},
plugin = {"pretty","html:target/cucumber"})

public class RunCuke {

}
